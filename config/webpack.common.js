const paths = require('./paths');

module.exports = {
  entry:  paths.src + '/index.js',
  output: {
    filename: paths.scripts + '/[name].bundle.js',
    path: paths.build,
    publicPath: '/',
    clean: true,
  },
};
