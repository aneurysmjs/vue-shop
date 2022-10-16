import { merge } from 'webpack-merge';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

import paths from '../../paths.mjs';
import commonConfig from './webpack.common.mjs';
import { pluginsProduction } from '../plugins.mjs';

export default ({ mode }) => {
  const config = commonConfig(mode);

  /** @type {import('webpack').Configuration} */
  return merge(config, {
    mode: 'production',
    devtool: 'source-map',

    output: {
      path: paths.dist,
      publicPath: '/',
      filename: '[name].[fullhash].js',
      chunkFilename: '[id].[contenthash].chunk.js',
    },

    performance: {
      hints: 'warning', // enum
      maxAssetSize: 200000, // int (in bytes),
      maxEntrypointSize: 400000, // int (in bytes)
      assetFilter(assetFilename) {
        // Function predicate that provides asset filenames
        return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
      },
    },

    optimization: {
      minimizer: [
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: { removeAll: true },
              },
            ],
          },
        }),
      ],
    },

    plugins: [
      ...pluginsProduction,
    ],
  });
};
