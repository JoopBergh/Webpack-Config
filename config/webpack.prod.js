const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');
const paths = require('./paths');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: paths.scripts + '/[name].[contenthash].bundle.js',
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: paths.stylesheets + '/[name].[contenthash].css',
    }),
  ],
});
