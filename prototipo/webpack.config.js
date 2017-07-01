'use strict';
//https://egghead.io/lessons/javascript-intro-to-webpack
var path = require('path');

module.exports = {
  // una propiedad por page
  entry: {
    login: './js/pages/login/index.js'
  },
  watch: true,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};