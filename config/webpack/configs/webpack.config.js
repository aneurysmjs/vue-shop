const { merge } = require('webpack-merge');

const loadPresets = require('../loadPresets');

const modeConfig = (env) => require(`./webpack.${env.mode}.js`)(env);

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => merge(modeConfig({ mode }), loadPresets({ mode, presets }));
