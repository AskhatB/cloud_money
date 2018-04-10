var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle_main.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        loaders: ['react-hot-loader/webpack', 'babel-loader?presets[]=react'],
        include: [
          path.resolve(__dirname, "src"),
        ],
        test: /\.js$/
      },
      {
        test:   /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
        loader: 'file-loader?name=[name].[ext]'
      }
      {
		test: /\.(png|jpg)$/,
		loader: 'url-loader'
	  }
    ]
  }
}