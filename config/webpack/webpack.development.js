const webpack = require('webpack');
const { merge: webpackMerge } = require('webpack-merge');

const { DEVSERVER_HOST, PORT } = require('../const');
const paths = require('../paths');

module.exports = (env) => {
  const commonConfig = require('./webpack.common')(env);

  /** @type {import('webpack').Configuration} */
  return webpackMerge(commonConfig, {
    mode: 'development',

    output: {
      path: paths.src,
      publicPath: `${DEVSERVER_HOST}:${PORT}/`,
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].map',
    },

    // `devServer`is not longer needed since we're using webpack-dev-middleware that
    // has more lower level api
    plugins: [new webpack.HotModuleReplacementPlugin()],
  });
};
