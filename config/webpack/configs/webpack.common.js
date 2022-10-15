const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

const paths = require('../../paths');
const loaders = require('../loaders');
const resolvers = require('../resolvers');

module.exports = (env) => {
  const isProd = env === 'production';

  return {
    name: 'webpack-common-config',
    entry: ['./src/main.ts'],
    resolve: {
      ...resolvers,
    },
    module: {
      rules: [...loaders],
    },
    plugins: [
      new VueLoaderPlugin(),

      new MiniCssExtractPlugin({
        filename: isProd ? '[name].[hash].css' : '[name].css',
        chunkFilename: isProd ? '[id].[hash].css' : '[id].css',
      }),

      new HtmlWebpackPlugin({
        template: paths.indexHTML,
      }),

      /**
       * @see https://github.com/vuejs/core/tree/main/packages/vue#bundler-build-feature-flags
       */
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: false,
        __VUE_PROD_DEVTOOLS__: false,
      }),

      new ESLintPlugin({
        extensions: ['vue', 'ts'],
        failOnError: false,
      }),
    ],
  };
};
