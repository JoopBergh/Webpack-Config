const path = require('path');

const NAME_SRC = '../src';
const NAME_BUILD = '../build';
const NAME_SCRIPTS = './scripts';
const NAME_STYLESHEETS = './stylesheets';
const NAME_ASSETS = '/assets';
const NAME_FONTS = '/fonts';
const NAME_IMAGES = '/images';

module.exports = {
  src: path.resolve(__dirname, NAME_SRC),
  build: path.resolve(__dirname, NAME_BUILD),
  scripts: NAME_SCRIPTS,
  stylesheets: NAME_STYLESHEETS,
  fonts: '.' + NAME_ASSETS + NAME_FONTS,
  images: NAME_ASSETS + NAME_IMAGES,
};