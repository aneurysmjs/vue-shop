import { merge } from 'webpack-merge';
import * as webpackPresets from './presets/index.mjs';

const loadPresets = (env = { presets: [] }) => {
  const presets = env.presets || [];

  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map((presetName) => webpackPresets[presetName](env));

  return merge({}, ...mergedConfigs);
};

export default loadPresets;
