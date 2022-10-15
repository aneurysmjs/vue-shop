const { exec } = require('node:child_process');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
// const chalk = require('chalk');
const { DEVSERVER_HOST, PORT, HOST } = require('../config/const');
const paths = require('../config/paths');
const webpackConfig = require('../config/webpack/webpack.config');
const {
  hookCompiler,
  logMessage,
  checkPlatformForOpenCommand,
} = require('./utils');

const open = checkPlatformForOpenCommand();

const app = express();

const start = async () => {
  /** @type {import('webpack').Configuration} */
  const config = webpackConfig({ mode: 'development' });

  config.entry = [
    `webpack-hot-middleware/client?path=${DEVSERVER_HOST}:${PORT}/__webpack_hmr`,
    ...config.entry,
  ];

  config.output.hotUpdateMainFilename = 'updates/[fullhash].hot-update.json';
  config.output.hotUpdateChunkFilename = 'updates/[id].[fullhash].hot-update.js';

  const compiler = webpack(config);

  app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    return next();
  });

  // Tell express to use the webpack-dev-middleware and use the webpack config
  // configuration file as a base.
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    }),
  );

  app.use(webpackHotMiddleware(compiler));

  app.use('*', express.static(paths.src));

  try {
    await hookCompiler(compiler);

    app.listen(PORT, () => {
      exec(`${open} ${DEVSERVER_HOST}:${PORT}`);
      // eslint-disable-next-line no-console
      console.log(
        `[${new Date().toISOString()}]`,
        `App is running: ${HOST || DEVSERVER_HOST}:${PORT}`,
      );
    });
  } catch (error) {
    logMessage(error, 'error');
  }
};

start();
