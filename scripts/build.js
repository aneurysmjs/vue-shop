const webpack = require('webpack');
const rimraf = require('rimraf');
const yargs = require('yargs/yargs');
// const chalk = require('chalk');

const paths = require('../config/paths');
const webpackConfig = require('../config/webpack/webpack.config');

const {
  hookCompiler,
  logMessage,
} = require('./utils');

const { presets } = yargs(process.argv.slice(2))
  .option('presets', {
    alias: 'p',
    describe: 'presets to load',
  })
  .help().argv;

const build = async () => {
  rimraf.sync(paths.dist);

  /** @type {import('webpack').Configuration} */
  const config = webpackConfig({ mode: 'production', presets });

  /** @type {import('webpack').Compiler} */
  const compiler = webpack(config);

  // wait until client is compiled
  try {
    await hookCompiler(compiler);

    compiler.run((error, stats) => {
      if (!error && !stats.hasErrors()) {
        // eslint-disable-next-line no-console
        console.log(stats.toString(config.stats));
      }
      logMessage('Client build done!', 'info');
      compiler.close(() => {
        if (presets == null) {
          process.exit();
        }
      });
    });
  } catch (error) {
    logMessage(error, 'error');
  }
};

build();
