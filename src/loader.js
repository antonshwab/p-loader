import axios from 'axios';
import cheerio from 'cheerio';
import util from 'util';
import fs from 'fs';
import path from 'path';
import { URL } from 'url';
import debug from 'debug';

const libDebug = debug('page-loader:lib');

const writeFile = util.promisify(fs.writeFile);
const mkdir = util.promisify(fs.mkdir);

const respType = {
  png: 'stream',
  ico: 'stream',
  jpg: 'stream',
  css: 'text',
  js: 'text',
};



const writes = {
  stream: (res, _path) => res.data.pipe(fs.createWriteStream(_path)),
  text: (res, _path) => writeFile(_path, res.data),
};

const load = (url, output) => {
  libDebug('load start!');
  return axios
    .get(url, {
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
      },
    })
    .then((res) => {
      libDebug('start process response');
      const { hostname, pathname } = new URL(url);
      const hostnamePart = hostname.split('.');
      const pathnamePart = pathname === '/' ? [] : pathname.slice(1).split('/');
      const samePart = [...hostnamePart, ...pathnamePart].join('-');
      const htmlFilename = [samePart, '.html'].join('');
      const assetsDirname = [samePart, '_files'].join('');
      const htmlPath = path.join(output, htmlFilename);
      const assetsPath = path.join(output, assetsDirname);
      libDebug('Path to loaded html: %s', htmlPath);
      libDebug('Path to loaded assets: $s', assetsPath);
      const pathAndOpts = new Map();

      libDebug('Start process html');
      const html = res.data;
      const $ = cheerio.load(html);
      libDebug('Pick up elements with assets');
      const elemsWithAssets = $('script[src^="/"], link[href^="/"], img[src^="/"], meta[content^="/"]');
      libDebug('Process assets and prepare pathAndOpts');
      elemsWithAssets.each((i, elem) => {
        const [currAssetPath, attrib] = [
          [$(elem).attr('src'), 'src'],
          [$(elem).attr('href'), 'href'],
          [$(elem).attr('content'), 'content'],
        ].find(([_path]) => _path !== undefined);

        const extname = path.extname(currAssetPath).slice(1);
        const newRelativeAssetPath = path.format({
          dir: assetsDirname,
          base: currAssetPath.slice(1).split('/').join('-'),
        });

        $(elem).attr(attrib, newRelativeAssetPath);
        const newAbsoluteAssetPath = path.resolve(output, newRelativeAssetPath);
        const optForAxios = {
          method: 'get',
          url: new URL(currAssetPath, url).href,
          responseType: respType[extname],
        };
        libDebug('Current extname asset: %s', extname);
        libDebug('Path to load asset: %s', newAbsoluteAssetPath);
        libDebug('Current asset options for axios: %s', JSON.stringify(optForAxios));
        pathAndOpts.set(newAbsoluteAssetPath, optForAxios);
      });
      const localHtml = $.html();

      libDebug('Make dir for assets and write changed html');
      return Promise.all([pathAndOpts, mkdir(assetsPath), writeFile(htmlPath, localHtml)]);
    })
    .then(([pathAndOpts]) => {
      libDebug('Start loading assets');
      return Promise.all(
        Array.from(pathAndOpts)
          .map(([_path, opt]) => Promise.all([axios(opt), _path, opt.responseType])));
    })
    .then((results) => {
      libDebug('End loading assets and start writing assets');
      return Promise.all(
        results.map(([resp, _path, responseType]) => writes[responseType](resp, _path)));
    })
    .catch((e) => {
      const statusTexts = {
        403: 'Forbidden',
        404: 'Not Found',
        500: 'Internal Server Error',
      };
      let message;
      if (e.response) {
        const statusText = e.response.statusText || statusTexts[e.response.status];
        message = `Status: ${e.response.status} ${statusText} ${e.response.config.url}`;
      }
      if (e.code) {
        message = `Get Error: ${e.code}, when trying ${e.syscall} at ${e.path}`;
      }
      return Promise.reject(message || e);
    });
};

export default load;
