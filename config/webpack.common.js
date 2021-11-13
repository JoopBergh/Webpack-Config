const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
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
        test: /\.html$/i, // HTML
        loader: 'html-loader',
        options: {
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i, // Stylesheets - SASS, SCSS & CSS
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: { config: path.resolve(__dirname, './postcss.config.js') },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(jp(e)?g|png|svg|gif)$/i, // Images
        type: 'asset/resource',
        generator: {
          filename: './' + paths.images + '/[name][ext][query]',
        },
      },
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
