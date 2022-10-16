import paths from '../paths.mjs';

export default {
  alias: {
    /**
     * @see https://github.com/vuejs/core/tree/main/packages/vue#with-a-bundler
     */
    vue$: 'vue/dist/vue.esm-bundler.js',
    api$: `${paths.src}/api/api.ts`,
    '@': `${paths.src}`,
    styles: `${paths.src}/assets/css`,
  },
  extensions: ['.js', '.vue', '.json', '.ts'],
};
