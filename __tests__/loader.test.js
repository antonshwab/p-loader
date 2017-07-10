import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import nock from 'nock';
import path from 'path';
import fs from 'fs';
import util from 'util';
import os from 'os';
import load from '../src';

const readFile = util.promisify(fs.readFile);

let outputPath;

let expectedHtml;

const fixturesPath = path.join(__dirname, '__fixtures__');
const htmlFilename = 'en-hexlet-io-courses.html';
const expectedHtmlPath = path.resolve(fixturesPath, htmlFilename);

beforeAll(() => {
  axios.defaults.adapter = httpAdapter;

  expectedHtml = fs.readFileSync(expectedHtmlPath);

  outputPath = fs.mkdtempSync(`${os.tmpdir()}${path.sep}`);

  nock('https://en.hexlet.io').get('/courses').reply(200, expectedHtml);
});

test('https://en.hexlet.io/courses', () => {
  expect.assertions(1);
  const htmlPath = path.resolve(outputPath, htmlFilename);
  return load('https://en.hexlet.io/courses', outputPath)
    .then(() => readFile(htmlPath))
    .then(actualHtml => expect(expectedHtml).toEqual(actualHtml));
});
