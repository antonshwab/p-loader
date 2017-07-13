import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import nock from 'nock';
import path from 'path';
import fs from 'fs';
import os from 'os';
import load from '../src';

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

const read = {
  png: readStream,
  ico: readStream,
  jpg: readStream,
  js: readText,
  css: readText,
};

const getAssetfn = assetPathname => assetPathname.slice(1).split('/').join('-');

const fixturesPath = path.join(__dirname, '__fixtures__');
const assetsDirname = 'en-hexlet-io-courses_files';
const expectedAssetsPath = path.resolve(fixturesPath, assetsDirname);
let outputPath;
let actualAssetsPath;

beforeEach(() => {
  const hexletUrl = 'https://en.hexlet.io';
  axios.defaults.adapter = httpAdapter;

  outputPath = fs.mkdtempSync(`${os.tmpdir()}${path.sep}`);
  actualAssetsPath = path.resolve(outputPath, assetsDirname);

  const mockedHtml = fs.readFileSync(path.resolve(fixturesPath, 'mocked_en-hexlet-io-courses.html'));
  nock(hexletUrl).get('/courses').reply(200, mockedHtml);

  assetsPathes.forEach((pathname) => {
    const assetfn = getAssetfn(pathname);
    const extname = path.extname(pathname).slice(1);
    const asset = read[extname](path.resolve(expectedAssetsPath, assetfn));
    nock(hexletUrl).get(pathname).reply(200, asset);
  });

  nock(hexletUrl)
    .get('/resource-can-not-be-found')
    .replyWithError({ status: 404, statusText: 'not found' })
    .get('/forbidden')
    .replyWithError({ status: 403, statusText: 'forbidden' })
    .get('/internal-server-error')
    .replyWithError({ status: 500, statusText: 'internal sever error' });
});

test('check html https://en.hexlet.io/courses', () => {
  expect.assertions(1);
  console.log(outputPath);
  const htmlFilename = 'en-hexlet-io-courses.html';
  return load('https://en.hexlet.io/courses', outputPath)
    .then(() => {
      const actualHtml = fs.readFileSync(path.resolve(outputPath, htmlFilename), 'utf8');
      const expectedHtml = fs.readFileSync(path.resolve(fixturesPath, htmlFilename), 'utf8');
      expect(actualHtml).toBe(expectedHtml);
    });
});

test('check .js: /assets/application-de3fcbe496ee3249cfdc6d8443c83c0502225f23ad09427f732fade418a2a159.js', () => {
  expect.assertions(1);
  console.log(outputPath);
  const assetPathname = '/assets/application-de3fcbe496ee3249cfdc6d8443c83c0502225f23ad09427f732fade418a2a159.js';
  const assetfn = getAssetfn(assetPathname);
  return load('https://en.hexlet.io/courses', outputPath)
    .then(() => {
      const actualAsset = fs.readFileSync(path.resolve(actualAssetsPath, assetfn), 'utf8');
      const expectedAsset = fs.readFileSync(path.resolve(expectedAssetsPath, assetfn), 'utf8');
      expect(actualAsset).toBe(expectedAsset);
    });
});

test('check .css: /assets/application-f6f7fab8ecc488e8feb7cec9f3f18a573ac349b6eed31cbf1b406d998bd88518.css', () => {
  expect.assertions(1);
  console.log(outputPath);
  const assetPathname = '/assets/application-f6f7fab8ecc488e8feb7cec9f3f18a573ac349b6eed31cbf1b406d998bd88518.css';
  const assetfn = getAssetfn(assetPathname);
  return load('https://en.hexlet.io/courses', outputPath)
    .then(() => {
      const actualAsset = fs.readFileSync(path.resolve(actualAssetsPath, assetfn), 'utf8');
      const expectedAsset = fs.readFileSync(path.resolve(expectedAssetsPath, assetfn), 'utf8');
      expect(actualAsset).toBe(expectedAsset);
    });
});

test('check .png: /assets/icons/default/android-icon-192x192-d4b29b393f0ec444bed29668e9b4b16aeb0a9c5312700e4f0819a96f72286cfc.png', () => {
  expect.assertions(1);
  console.log(outputPath);
  const assetPathname = '/assets/icons/default/android-icon-192x192-d4b29b393f0ec444bed29668e9b4b16aeb0a9c5312700e4f0819a96f72286cfc.png';
  const assetfn = getAssetfn(assetPathname);
  return load('https://en.hexlet.io/courses', outputPath)
    .then(() => {
      let actualAsset;
      let expectedAsset;
      const actualReadable = fs.createReadStream(path.resolve(actualAssetsPath, assetfn));
      actualReadable.on('data', (chunk) => { actualAsset += chunk; });
      actualReadable.on('end', () => { actualAsset = actualAsset.toString(); });

      const expectedReadable = fs.createReadStream(path.resolve(expectedAssetsPath, assetfn));
      expectedReadable.on('data', (chunk) => { actualAsset += chunk; });
      expectedReadable.on('end', () => { actualAsset = actualAsset.toString(); });
      expect(actualAsset).toBe(expectedAsset);
    });
});

test('check .ico: /assets/icons/default/favicon-8fa102c058afb01de5016a155d7db433283dc7e08ddc3c4d1aef527c1b8502b6.ico', () => {
  expect.assertions(1);
  console.log(outputPath);
  const assetPathname = '/assets/icons/default/favicon-8fa102c058afb01de5016a155d7db433283dc7e08ddc3c4d1aef527c1b8502b6.ico';
  const assetfn = getAssetfn(assetPathname);
  return load('https://en.hexlet.io/courses', outputPath)
    .then(() => {
      let actualAsset;
      let expectedAsset;
      const actualReadable = fs.createReadStream(path.resolve(actualAssetsPath, assetfn));
      actualReadable.on('data', (chunk) => { actualAsset += chunk; });
      actualReadable.on('end', () => { actualAsset = actualAsset.toString(); });

      const expectedReadable = fs.createReadStream(path.resolve(expectedAssetsPath, assetfn));
      expectedReadable.on('data', (chunk) => { actualAsset += chunk; });
      expectedReadable.on('end', () => { actualAsset = actualAsset.toString(); });
      expect(actualAsset).toBe(expectedAsset);
    });
});

test('403 forbidden', () => {
  expect.assertions(1);
  const status = 403;
  const text = 'forbidden';
  const url = 'https://en.hexlet.io/forbidden';
  const message = `Status: ${status} ${text} ${url}`;
  return load(url, outputPath)
    .catch(e => expect(e).toBe(message));
});

test('404 resource-can-not-be-found', () => {
  expect.assertions(1);
  const status = 404;
  const text = 'not found';
  const url = 'https://en.hexlet.io/resource-can-not-be-found';
  const message = `Status: ${status} ${text} ${url}`;
  return load(url, outputPath)
    .catch(e => expect(e).toBe(message));
});

test('500 resource-can-not-be-found', () => {
  expect.assertions(1);
  const status = 500;
  const text = 'internal sever error';
  const url = 'https://en.hexlet.io/internal-server-error';
  const message = `Status: ${status} ${text} ${url}`;
  return load(url, outputPath)
    .catch(e => expect(e).toBe(message));
});

test('file already exist', () => {
  expect.assertions(1);
  const code = 'EEXIST';
  const syscall = 'mkdir';
  const message = `Get Error: ${code}, when trying ${syscall} at ${actualAssetsPath}`;
  return load('https://en.hexlet.io/courses', outputPath)
    .then(() => load('https://en.hexlet.io/courses', outputPath))
    .catch(e => expect(e).toBe(message));
});

