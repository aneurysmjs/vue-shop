const webpack = require('webpack');
const { setupPath } = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const paths = require('./paths');

const progressHandler = (percentage, message, ...args) => {
  // e.g. Output each progress message directly to the console:
  console.info(percentage, message, ...args);
};

module.exports = (mode) => {
  const prodMode = mode === 'production';
  return {

    entry: ['./src/main.js'],

    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        'api$': `${paths.src}/api/api.js`,
        'components': `${paths.src}/components`,
        'core': `${paths.src}/core`,
        'pages': `${paths.src}/pages`,
      },
      extensions: ['.js', '.vue', 'json']
    },

    module: {
      // rules for modules (configure loaders, parser options, etc.)
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.jsx?$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: prodMode ? MiniCssExtractPlugin.loader : 'vue-style-loader',
            },
            {
              loader: 'css-loader'
            },
            // {
            //   loader: 'postcss-loader', // Run post css actions
            //   options: {
            //     plugins() { // post css plugins, can be exported to postcss.config.js
            //       return [
            //         require('precss'),
            //         require('autoprefixer')
            //       ];
            //     }
            //   }
            // },
            {
              loader: 'sass-loader'
            }
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader?name=assets/img/[name].[ext]'
            }
          ]
        },
        {
          test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/', // where the fonts will go
            }
          }]
        },
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new webpack.ProgressPlugin(progressHandler),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: prodMode ? '[name].[hash].css' : '[name].css',
        chunkFilename: prodMode ? '[id].[hash].css' : '[id].css',
      }),
      new HtmlWebpackPlugin({
        template: setupPath('../src/index.html'),
      }),
      // copy files and folders to specific paths.
      new CopyWebpackPlugin([{
        // Copy `assets` contents to {output}/assets/
        from: 'src/assets',
        to: 'assets',
        ignore: [
          // Doesn't copy any files with a scss extension
          '*.scss'
        ],
      }])
    ]
  };
};