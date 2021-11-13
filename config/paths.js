const path = require('path');

const NAME_SRC = '../src';
const NAME_BUILD = '../build';
const NAME_SCRIPTS = './scripts';

module.exports = {
  src: path.resolve(__dirname, NAME_SRC),
  build: path.resolve(__dirname, NAME_BUILD),
  scripts: NAME_SCRIPTS,
};
