const paths = require('./paths');

module.exports = {
  entry:  paths.src + '/index.js',
  output: {
    filename: paths.scripts + '/[name].bundle.js',
    path: paths.build,
    publicPath: '/',
    clean: true,
  },

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