/* global __dirname, require, module*/

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pkg = require(path.resolve(__dirname, '../package.json'));

let libraryName = pkg.name;

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.js'),
  devtool: 'source-map',
  output: {
    globalObject: 'typeof self !== \'undefined\' ? self : this',
    path: path.resolve(__dirname, '../lib/dev'),
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
    modules: [path.resolve(__dirname, '../node_modules'), path.resolve(__dirname, '../src')],
    extensions: ['.ts', '.tsx', '.json', '.js', '.html']
  },
  plugins: [
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
      },
      {
        from: path.resolve(__dirname, '../node_modules/@webcomponents/webcomponentsjs/bundles/*'),
        to: path.resolve(__dirname, '../lib/dev/bundles/'),
        flatten: true
      }
    ])
  ]
};

module.exports = config;
