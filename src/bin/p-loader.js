#!/usr/bin/env node

import yargs from 'yargs';
import Listr from 'listr';
import process from 'process';
import load from '../';

const cwd = process.cwd();
const startLoad = (url, path = cwd, ctx) => load(url, path, ctx);

// eslint-disable-next-line no-unused-expressions
yargs
  .command({
    command: ['load [output] <url>', '*'],
    aliases: ['l'],
    desc: 'Downloads the page from the url and puts it in the specified folder (the directory from which you launched by default)',
    handler: (argv) => {
      const tasks = new Listr([
        {
          title: `Loading ${argv.url}!`,
          task: () => new Listr([
            {
              title: 'Loading and saving...',
              task: ctx =>
                startLoad(argv.url, argv.output, ctx)
                  .then(() => new Listr([
                    {
                      title: 'Page...',
                      task: () => console.log(`Page was loaded and saved as '${ctx.pageFilename}'`),
                    },
                    {
                      title: 'Assets...',
                      task: () => ctx.assetsUrls.forEach(assetUrl => console.log(`Asset ${assetUrl} is loaded!`)),
                    },
                  ])),
            },
          ]),
        },
      ]);

      return tasks.run().catch((errMessage) => {
        console.error(errMessage);
        process.exit(1);
      });
    },
  })
  .option('output', {
    alias: 'o',
    describe: 'provide a path to load',
  })
  .help()
  .argv;

