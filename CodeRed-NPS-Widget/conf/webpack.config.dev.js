/* global __dirname, require, module*/

const path = require('path');
const webpack = require('webpack');
//const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const pkg = require('../package.json');

let libraryName = pkg.name;

let plugins = [], outputFile;


const config = {
  mode: "development",
  entry: path.join(process.cwd(), 'src/index.js'),
  devtool: 'source-map',
  output: {
    globalObject: 'typeof self !== \'undefined\' ? self : this',
    path: path.join(process.cwd(), '/lib/dev'),
    filename: libraryName + '.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /(\.tsx|\.ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.ts', '.tsx', '.json', '.js']
  }
};

module.exports = config;
