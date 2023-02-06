import ESLintPlugin from 'eslint-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import paths from '../paths.mjs';

const isProd = process.env.NODE_ENV === 'production';

export const pluginsCommon = [
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

  // new CopyWebpackPlugin({
  //   patterns: [
  //     { from: 'assets/img', to: 'dist' },
  //   ],
  // }),
];

export const pluginsDevelopment = [
  new webpack.HotModuleReplacementPlugin(),
];

export const pluginsProduction = [
  new HtmlWebpackPlugin({
    template: paths.indexHTML,
    minify: {
      collapseWhitespace: true,
      keepClosingSlash: true,
      minifyCSS: true,
      minifyJS: true,
      minifyURLs: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
    },
  }),
  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer',
  }),
  new CompressionPlugin({
    test: /\.(png|jpe?g|gif)$/,
  }),
];
