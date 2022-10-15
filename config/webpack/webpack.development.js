const webpack = require('webpack');
const { merge: webpackMerge } = require('webpack-merge');

const { DEVSERVER_HOST, PORT } = require('../const');
const paths = require('../paths');

module.exports = (env) => {
  // eslint-disable-next-line global-require
  const commonConfig = require('./webpack.common')(env);

  /** @type {import('webpack').Configuration} */
  return webpackMerge(commonConfig, {
    mode: 'development',

    output: {
      path: paths.src,
      publicPath: `${DEVSERVER_HOST}:${PORT}`,
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].map',
    },

    devServer: {
      static: paths.src,
      compress: true,
      port: 9000,
      /**
       * Basically tells the dev-server "hey! if you don't match something here,
       * the browser probable would know what to do with it"
       */
      historyApiFallback: true,
      open: true,
      client: {
        overlay: {
          warnings: false,
          errors: false,
        },
      },
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  });
};
