/* global __dirname, require, module*/

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const pkg = require(path.resolve(__dirname, '../package.json'));

let libraryName = pkg.name;

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index-test.js'),
  devtool: 'source-map',
  output: {
    globalObject: 'typeof self !== \'undefined\' ? self : this',
    path: path.resolve(__dirname, '../lib/test'),
    filename: libraryName + '.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
    {
      test: /\.html$/,
      use: [
        // Chained loaders are applied last to first
        { loader: 'babel-loader' },
        { loader: 'polymer-webpack-loader' }
      ]
    },
    {
        test: /\.js$/,
        // We need to transpile Polymer itself and other ES6 code
        // exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [[
              'env',
              {
                targets: { browsers: ['last 2 Chrome versions', 'Safari 10'] },
                debug: true
              }
            ]],
            plugins: [['transform-object-rest-spread', { useBuiltIns: true }]]
          }
        }
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
    modules: [path.resolve(__dirname, '../node_modules'), path.resolve(__dirname, '../src')],
    extensions: ['.ts', '.tsx', '.json', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(['lib/test'], { verbose: true, root: path.resolve(__dirname, '..') }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: 'static',
        ignore: ['.*']
      },
      {
        from: path.resolve(__dirname, '../node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js')
      },
      {
        from: path.resolve(__dirname, '../node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js')
      }
    ])
  ]
};

module.exports = config;
