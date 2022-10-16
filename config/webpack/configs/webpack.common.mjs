import loaders from '../loaders.mjs';
import resolvers from '../resolvers.mjs';
import { pluginsCommon } from '../plugins.mjs';

export default () => ({
  name: 'webpack-client',
  entry: ['./src/main.ts'],
  resolve: {
    ...resolvers,
  },
  module: {
    rules: [...loaders],
  },
  plugins: [
    ...pluginsCommon,
  ],
});
