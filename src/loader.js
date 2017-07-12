import axios from 'axios';
import cheerio from 'cheerio';
import util from 'util';
import fs from 'fs';
import path from 'path';
import { URL } from 'url';

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

const load = (url, output) => axios
  .get(url, {
    headers: {
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
    },
  })
  .then((res) => {
    const { hostname, pathname } = new URL(url);
    const hostnamePart = hostname.split('.');
    const pathnamePart = pathname === '/' ? [] : pathname.slice(1).split('/');
    const samePart = [...hostnamePart, ...pathnamePart].join('-');
    const htmlFilename = [samePart, '.html'].join('');
    const assetsDirname = [samePart, '_files'].join('');
    const htmlPath = path.join(output, htmlFilename);
    const assetsPath = path.join(output, assetsDirname);

    const pathAndOpts = new Map();

    const html = res.data;
    const $ = cheerio.load(html);
    const elemsWithAssets = $('script[src^="/"], link[href^="/"], img[src^="/"], meta[content^="/"]');
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
      pathAndOpts.set(newAbsoluteAssetPath, {
        method: 'get',
        url: new URL(currAssetPath, url).href,
        responseType: respType[extname],
      });
    });
    const localHtml = $.html();

    return Promise.all([pathAndOpts, mkdir(assetsPath), writeFile(htmlPath, localHtml)]);
  })
  .then(([pathAndOpts]) => {
    console.log(Array.from(pathAndOpts));
    return Promise.all([
      Array.from(pathAndOpts).map(([_path, opt]) => [_path, opt.responseType]),
      ...Array.from(pathAndOpts).map(([, opt]) => axios(opt)),
    ]);
  })
  .then(([pathAndRespTypes, ...resps]) =>
    Promise.all(resps.map((resp, i) => {
      const [_path, responseType] = pathAndRespTypes[i];
      return writes[responseType](resp, _path);
    })))
  .catch(e => console.error(e));

export default load;
