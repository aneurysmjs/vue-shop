import webpack from 'webpack';
import rimraf from 'rimraf';
import yargs from 'yargs/yargs';

import paths from '../config/paths.mjs';
import webpackConfig from '../config/webpack/configs/webpack.config.mjs';

import {
  hookCompiler,
  logMessage,
} from './utils.mjs';

const { presets } = yargs(process.argv.slice(2))
  .option('presets', {
    alias: 'p',
    describe: 'presets to load',
  })
  .help().argv;

process.env.NODE_ENV = 'production';

const build = () => {
  rimraf.sync(paths.dist);

  /** @type {import('webpack').Configuration} */
  const config = webpackConfig({ mode: process.env.NODE_ENV, presets });

  /** @type {import('webpack').Compiler} */
  const compiler = webpack(config);
  // display percentage build
  new webpack.ProgressPlugin().apply(compiler);

  /**
   * @see https://github.com/webpack/webpack/blob/e7087ffeda7fa37dfe2ca70b5593c6e899629a2c/bin/webpack.js#L290-L292
   */
  const compilerCallback = (err, stats) => {
    if (err) {
      logMessage(err.stack || err, 'error');
      if (err.details) {
        logMessage(err.details || err, 'error');
      }
      process.exit(1);
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
      logMessage('stats.errors: ', JSON.stringify(info.errors, null, 2), 'error');

      // eslint-disable-next-line no-console
      console.error(info.errors);
      logMessage('Build Failed :(', 'error');

      process.on('exit', () => {
        process.exit(2);
      });

      return;
    }

    logMessage('Client build done!', 'info');
  };

  compiler.run(compilerCallback);

  // try {
  //   //  await hookCompiler(compiler);

  // } catch (error) {
  //   logMessage(error, 'error');
  // }
};

build();
