'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin');


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const name=process.env.name




module.exports = {
  name,
  context: path.resolve(__dirname, '../'),
  entry: {
    app: `./src/main.js`,
    // utils:'./src/utils/ajax.js',
    // vue:['Vue']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      // '@': resolve('src/common'),
      '@':path.join(__dirname,'..','src','components'),
      '#':path.join(__dirname,'..','src','utils'),
    }
  },
  // externals:{
  //   Vue:'Vue'
  // },
  externals: {
    'vue': 'Vue',
    'Vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex':'Vuex',
    // 'axios': 'axios',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['cache-loader',{
          loader:'vue-loader',
          options: vueLoaderConfig
        }],
        include: resolve('src'),
        // include
      },
    
      {
        test: /\.js$/,
        use:['cache-loader' ,{loader:'babel-loader',options:{
          cacheDirectory: true
        }}],
        include: [resolve('src'), resolve('test')]
      },
      {
        test:/\.jade/,
        loader:['cache-loader','jade-loader'],
        include:resolve('src')
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        include:resolve('src'),
        options: {
          publicPath:process.env.NODE_ENV=='production'?'/transn-ui/dist/':'../../',
          limit: 1000,
          name: utils.assetsPath('img/[name].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        include:resolve('src'),
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        include:resolve('src'),
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[ext]')
        }
      }
    ]
  },
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
