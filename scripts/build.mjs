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

const build = async () => {
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
        logMessage('Error Details: => ', err.details || err, 'error');
      }
      process.exit(1);
    }

    if (stats.hasErrors()) {
      process.on('exit', () => {
        process.exit(2);
      });
    }

    logMessage('Client build done!', 'info');
  };

  try {
    await hookCompiler(compiler);

    compiler.run(compilerCallback);
  } catch (error) {
    logMessage(error, 'error');
  }
};

build();
