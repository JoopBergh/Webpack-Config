const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = {
  entry:  paths.src + '/index.js',
  output: {
    filename: paths.scripts + '/[name].bundle.js',
    path: paths.build,
    publicPath: '/',
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: paths.src + '/template.html',
      filename: 'index.html',
      publicPath: '',
    }),
  ],


  module: {
    rules: [
      {
        test: /\.js$/i, // Babel - JavaScript compiler
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: './config/babel.config.js',
          },
        },
      },
    ],
  },
};
