/* global __dirname, require, module*/

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pkg = require(path.resolve(__dirname, '../package.json'));

let libraryName = pkg.name;

const config = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index.js'),
  devtool: 'source-map',
  output: {
    globalObject: 'typeof self !== \'undefined\' ? self : this',
    path: path.join(process.cwd(), '/lib/prod'),
    filename: libraryName + '.min.js',
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
    modules: [path.resolve(__dirname, '../node_modules'), path.resolve(__dirname, '../src')],
    extensions: ['.ts', '.tsx', '.json', '.js']
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: 'static',
        ignore: ['.*']
      },
      {
        from: path.resolve(__dirname, '../node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js')
      },
      {
        from: path.resolve(__dirname, '../node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js')
      },
      {
        from: path.resolve(__dirname, '../node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js')
      },
      {
        from: path.resolve(__dirname, '../node_modules/@webcomponents/webcomponentsjs/bundles/*'),
        to: path.resolve(__dirname, '../lib/prod/bundles/'),
        flatten: true
      }
    ])
  ],
optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 5,
          mangle: true
        },
        sourceMap: false
      })
    ]
  }
};

module.exports = config;
