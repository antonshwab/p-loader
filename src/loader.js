import axios from 'axios';
import cheerio from 'cheerio';
import util from 'util';
import fs from 'fs';
import path from 'path';
import { URL } from 'url';

const writeFile = util.promisify(fs.writeFile);

const load = (url, output) => axios
  .get(url)
  .then((res) => {
    const { hostname, pathname } = new URL(url);
    const hostnamePart = hostname.split('.').join('-');
    const pathnamePart = pathname ? pathname.split('/').join('-') : '';
    const filename = path.join(output, [hostnamePart, pathnamePart, '.html'].join(''));
    // console.log(filename);
    const html = res.data;
    return writeFile(filename, html);
  })
  .catch(e => console.error(e));

  export default load;