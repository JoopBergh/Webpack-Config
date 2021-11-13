const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');
const paths = require('./paths');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,

  plugins: [
    new MiniCssExtractPlugin({
      filename: paths.stylesheets + '/[name].css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i, // Fonts
        type: 'asset/resource',
        generator: {
          filename: paths.fonts + '/[name][ext][query]',
        },
      },
    ],
  },
});
