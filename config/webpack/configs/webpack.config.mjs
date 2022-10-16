import { merge } from 'webpack-merge';

import loadPresets from '../loadPresets.mjs';
import webpackDevelopment from './webpack.development.mjs';
import webpackProduction from './webpack.production.mjs';

export default ({ mode, presets } = { mode: 'production', presets: [] }) => {
  const webpackConfig = mode === 'development' ? webpackDevelopment : webpackProduction;

  return merge(webpackConfig({ mode }), loadPresets({ mode, presets }));
};
