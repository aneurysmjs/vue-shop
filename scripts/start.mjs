import { exec } from 'node:child_process';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import chalk from 'chalk';
import { DEVSERVER_HOST, PORT, HOST } from '../config/const.mjs';
import paths from '../config/paths.mjs';
import webpackConfig from '../config/webpack/configs/webpack.config.mjs';
import {
  logMessage,
  checkPlatformForOpenCommand,
} from './utils.mjs';

const open = checkPlatformForOpenCommand();

const app = express();

process.env.NODE_ENV = 'development';

const start = async () => {
  /** @type {import('webpack').Configuration} */
  const config = webpackConfig({ mode: process.env.NODE_ENV });

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

  compiler.hooks.compile.tap(compiler.name, () => {
    logMessage(`[${compiler.name}] Compiling `);
  });

  try {
    // await hookCompiler(compiler);

    app.listen(PORT, () => {
      exec(`${open} ${DEVSERVER_HOST}:${PORT}`);

      chalk.blue(
        `[${new Date().toISOString()}]`,
        `App is running: ${HOST || DEVSERVER_HOST}:${PORT}`,
      );
    });
  } catch (error) {
    logMessage(error, 'error');
  }
};

start();
