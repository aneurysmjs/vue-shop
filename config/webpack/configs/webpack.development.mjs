import { merge } from 'webpack-merge';

import { DEVSERVER_HOST, PORT } from '../../const.mjs';
import paths from '../../paths.mjs';
import commonConfig from './webpack.common.mjs';
import { pluginsDevelopment } from '../plugins.mjs';

export default ({ mode }) => {
  const config = commonConfig(mode);

  /** @type {import('webpack').Configuration} */
  return merge(config, {
    mode: 'development',

    output: {
      path: paths.src,
      publicPath: `${DEVSERVER_HOST}:${PORT}/`,
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].map',
    },

    // `devServer`is not longer needed since we're using webpack-dev-middleware that
    // has more lower level api
    plugins: [...pluginsDevelopment],
  });
};
