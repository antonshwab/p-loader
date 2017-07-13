#!/usr/bin/env node

import yargs from 'yargs';
import process from 'process';
import load from '../';

const cwd = process.cwd();
const startLoad = (url, path = cwd) => load(url, path);

// eslint-disable-next-line no-unused-expressions
yargs
  .command({
    command: ['load [output] <url>', '*'],
    aliases: ['l'],
    desc: 'Downloads the page from the url and puts it in the specified folder (the directory from which you launched by default)',
    handler: argv => startLoad(argv.url, argv.output).catch((eMessage) => {
      console.error(eMessage);
      process.exit(1);
    }),
  })
  .option('output', {
    alias: 'o',
    describe: 'provide a path to load',
  })
  .help()
  .argv;

