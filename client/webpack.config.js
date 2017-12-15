const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const plugins = [
  new ExtractTextPlugin({
    filename: './bundle.css',
    allChunks: true
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new HtmlWebpackPlugin({hash: true, title: 'UpSense'})
]

module.exports = function webpackStuff (env) {
  if (env === 'production') plugins.push(new MinifyPlugin())

  return {
    entry: [
      './src/index.js',
      './styles/app.css'
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './dist')
    },
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2017'],
          plugins: []
        },
        include: [
          path.resolve(__dirname, './')
        ]
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1'
        })
      }]
    },
    plugins,
    devServer: {
      proxy: [{
        path: '/auth/**/*',
        target: 'http://localhost:3000'
      }, {
        path: '/logout',
        target: 'http://localhost:3000'
      }, {
        path: '/login',
        target: 'http://localhost:3000'
      }, {
        path: '/ws',
        target: 'http://localhost:3000',
        ws: true
      }]
    }
  }
}
