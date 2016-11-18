'use strict';


const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');


module.exports = {

  // place from where all modules can be accessed
  context: __dirname + '/src',

  entry: {
    app: './index.js'
  },
  output: {
    path: __dirname + '/public',
    //publicPath: '/public/js/',
    filename: "bundle.js",

  },


  //watcher
  watch: NODE_ENV == 'development',

  // make watcher a bit faster
  watchOptions: {
    aggregateTimeout: 100
  },


// allow to use source-maps only in development version
  devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,


// set environment plugin
  plugins: [

    // plugin don't allow to build app if data is invalid
    new webpack.NoErrorsPlugin(),

    // plugin define NODE_ENV variable
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })

  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  }
};


// compress files in production version
  if (NODE_ENV == 'production') {
    module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          // don't show unreacheable variables etc
          warnings:      false,
          drop_console:  true,
          unsafe:        true
        }
      })
    );
  }
