import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const vueRegex = /\.vue$/;
const tsRegex = /\.ts$/;
const cssRegex = /\.css$/;
const imgRegex = /\.(png|jpe?g|gif)$/;
const fontRegex = /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/;

const vueLoader = {
  test: vueRegex,
  loader: 'vue-loader',
};

const tsLoader = {
  test: tsRegex,
  loader: 'ts-loader',
  exclude: /node_modules/,
  options: {
    appendTsSuffixTo: [vueRegex],
  },
};

const cssLoader = {
  test: cssRegex,
  use: [
    {
      loader: process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'vue-style-loader',
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'postcss-loader',
    },
  ],
};

const imgLoader = {
  test: imgRegex,
  use: [
    {
      loader: 'file-loader?name=assets/img/[name].[ext]',
    },
  ],
};

const fontsLoader = {
  test: fontRegex,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/', // where the fonts will go
      },
    },
  ],
};

export default [
  vueLoader,
  tsLoader,
  cssLoader,
  imgLoader,
  fontsLoader,
];
