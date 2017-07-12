import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import nock from 'nock';
import path from 'path';
import fs from 'fs';
// import util from 'util';
import os from 'os';
import load from '../src';

// const readFile = util.promisify(fs.readFile);
// const readdir = util.promisify(fs.readdir);

const assetsPathes = [
  '/assets/application-de3fcbe496ee3249cfdc6d8443c83c0502225f23ad09427f732fade418a2a159.js',
  '/assets/application-f6f7fab8ecc488e8feb7cec9f3f18a573ac349b6eed31cbf1b406d998bd88518.css',
  '/assets/essential-1be7ec1eb7fb742f45794fdcd655ba67bea88b520e799abb21c29b54676eac04.js',
  '/assets/icons/default/android-icon-192x192-d4b29b393f0ec444bed29668e9b4b16aeb0a9c5312700e4f0819a96f72286cfc.png',
  '/assets/icons/default/apple-touch-icon-114x114-c93f5c2681345acc94f672dc26dd79695eac733a3ac6f99ab3b0fbfa077d834e.png',
  '/assets/icons/default/apple-touch-icon-120x120-3da36d0e1da4c8d1a6df85aec54c2b84946e96865005ffb4a10e99223bba2d61.png',
  '/assets/icons/default/apple-touch-icon-144x144-1f4fb8973826b06c9595101aac7f78fdb9bf26c3b769b759882ad319d58b17fd.png',
  '/assets/icons/default/apple-touch-icon-152x152-93cc5e1542f2ca0d20c1f7fca7b5ac37be57f70e42d23877668d616383497540.png',
  '/assets/icons/default/apple-touch-icon-57x57-f52e49208ae173f740c8f115217781975b78433b1fda469ec28ce70b92fc013e.png',
  '/assets/icons/default/apple-touch-icon-60x60-08818618834c9c99de70284d4bfb0cdfc926b03c88c732ba92fd9ba9e5ac900f.png',
  '/assets/icons/default/apple-touch-icon-72x72-27e1216e0a1b806d82b8ca649081eacf5b3f59b677b44c8e40eae30e83f90294.png',
  '/assets/icons/default/apple-touch-icon-76x76-6a66b2c592947eb379280523cb009884f61f620be8375ebdee3ed7d23743314a.png',
  '/assets/icons/default/favicon-128-a9446dd4e081479874e0c59b63960612d181b05b10b2fbd544a7da7c5f6ead2a.png',
  '/assets/icons/default/favicon-16x16-cc9a0ab442a9dcba7e70fb733f58691955a2d1608fe439a5eed2afab400eb719.png',
  '/assets/icons/default/favicon-196x196-422632c0ef41e9b13dd7ea89f1764e860d225ca3c20502b966a00c0039409a75.png',
  '/assets/icons/default/favicon-32x32-2bae33d5d827199a252cd9309926586f01044782f3c83e3ffaf783bb318707a2.png',
  '/assets/icons/default/favicon-8fa102c058afb01de5016a155d7db433283dc7e08ddc3c4d1aef527c1b8502b6.ico',
  '/assets/icons/default/favicon-96x96-39f08613bbf8b826ce119c3b6bc232db10c863c168d57b180f78d18cadf843c6.png',
  '/assets/icons/default/mstile-144x144-1f4fb8973826b06c9595101aac7f78fdb9bf26c3b769b759882ad319d58b17fd.png',
  '/assets/icons/default/mstile-150x150-58610d84ec0afe2803c6e07649701c712e3257ab5fc06c6cd338557201b2571a.png',
  '/assets/icons/default/mstile-310x150-74279c38ca713e2d5526d2fc170c0c7951b85b83852fc22a59b216c73843a5ce.png',
  '/assets/icons/default/mstile-310x310-dfe850e714b2b802fb7455a582bf8d34dcbd73c6e8d100a54d4c36007079f4e2.png',
  '/assets/icons/default/mstile-70x70-a9446dd4e081479874e0c59b63960612d181b05b10b2fbd544a7da7c5f6ead2a.png',
];

const readText = _path => fs.readFileSync(_path, 'utf8');
const readStream = _path => fs.createReadStream(_path);

const reads = {
  png: readStream,
  ico: readStream,
  jpg: readStream,
  js: readText,
  css: readText,
};

let outputPath;
let actualAssetsPath;

const fixturesPath = path.join(__dirname, '__fixtures__');
const htmlFilename = 'en-hexlet-io-courses.html';
const assetsDirname = 'en-hexlet-io-courses_files';
const expectedAssetsPath = path.resolve(fixturesPath, assetsDirname);

beforeAll(() => {
  axios.defaults.adapter = httpAdapter;

  outputPath = fs.mkdtempSync(`${os.tmpdir()}${path.sep}`);
  actualAssetsPath = path.resolve(outputPath, assetsDirname);

  const mockedHtml = fs.readFileSync(path.resolve(fixturesPath, 'mocked_en-hexlet-io-courses.html'));
  nock('https://en.hexlet.io').get('/courses').reply(200, mockedHtml);

  assetsPathes.forEach((pathname) => {
    const assetName = pathname.slice(1).split('/').join('-');
    const extname = path.extname(pathname).slice(1);
    const asset = reads[extname](path.resolve(expectedAssetsPath, assetName));
    nock('https://en.hexlet.io').get(pathname).reply(200, asset);
  });
});

test('https://en.hexlet.io/courses', () => {
  expect.assertions(24);
  console.log(outputPath);
  return load('https://en.hexlet.io/courses', outputPath)
    .then(() => {
      const actualHtml = fs.readFileSync(path.resolve(outputPath, htmlFilename), 'utf8');
      const expectedHtml = fs.readFileSync(path.resolve(fixturesPath, htmlFilename), 'utf8');
      // console.log(typeof actualHtml);
      expect(actualHtml).toBe(expectedHtml);

      const assetFilenames = fs.readdirSync(actualAssetsPath);
      assetFilenames.forEach((assetfn) => {
        const extname = path.extname(assetfn).slice(1);
        let actualAsset;
        let expectedAsset;
        if (extname === 'js' || extname === 'css') {
          actualAsset = fs.readFileSync(path.resolve(actualAssetsPath, assetfn), 'utf8');
          expectedAsset = fs.readFileSync(path.resolve(expectedAssetsPath, assetfn), 'utf8');
        } else {
          const actualReadable = fs.createReadStream(path.resolve(actualAssetsPath, assetfn));
          actualReadable.on('data', (chunk) => { actualAsset += chunk; });
          actualReadable.on('end', () => { actualAsset = actualAsset.toString(); });

          const expectedReadable = fs.createReadStream(path.resolve(expectedAssetsPath, assetfn));
          expectedReadable.on('data', (chunk) => { actualAsset += chunk; });
          expectedReadable.on('end', () => { actualAsset = actualAsset.toString(); });
        }
        expect(actualAsset).toBe(expectedAsset);
      });
    })
    // .then(() => Promise.all([
    //   readFile(path.resolve(outputPath, htmlFilename), 'utf8'),
    //   readFile(path.resolve(fixturesPath, htmlFilename), 'utf8'),
    // ]))
    // .then(([actualHtml, expectedHtml]) => {
    //   expect(actualHtml).toBe(expectedHtml);
    //   return readdir(actualAssetsPath);
    // })
    // .then((assetFilenames) => {
    //   assetFilenames.forEach((assetfn) => {
    //     const extname = path.extname(assetfn).slice(1);
    //     let actualAsset;
    //     let expectedAsset;
    //     if (extname === 'js' || extname === 'css') {
    //       Promise.all([
    //         readFile(path.resolve(actualAssetsPath, assetfn), 'utf8'),
    //         readFile(path.resolve(expectedAssetsPath, assetfn), 'utf8'),
    //       ])
    //         .then(([_actualAsset, _expectedAsset]) => {
    //           console.log(112);
    //           console.log(typeof _actualAsset, typeof _expectedAsset);
    //           console.log(_actualAsset === _expectedAsset);
    //           // expect(actualAsset).toBe(expectedAsset);
    //           actualAsset = _actualAsset;
    //           expectedAsset = _expectedAsset;
    //           // expect(true).toBe(true);
    //           // return Promise.resolve(1);
    //         })
    //         .catch(e => console.error(e));
    //     } else {
    //       const actualReadable = fs.createReadStream(path.resolve(actualAssetsPath, assetfn));
    //       // let actualAsset;
    //       actualReadable.on('data', (chunk) => { actualAsset += chunk; });
    //       actualReadable.on('end', () => { actualAsset = actualAsset.toString(); });

    //       const expectedReadable = 
  //  fs.createReadStream(path.resolve(expectedAssetsPath, assetfn));
    //       // let expectedAsset;
    //       expectedReadable.on('data', (chunk) => { actualAsset += chunk; });
    //       expectedReadable.on('end', () => { actualAsset = actualAsset.toString(); });
    //       // expect(actualAsset).toBe(expectedAsset);
    //     }
    //     expect(actualAsset).toBe(expectedAsset);
    //   });
    // })
    .catch(e => console.error(e));
});
