var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		app: './md1.js',
		vendors: './md2.js'
	},
	output: {
		path:path.resolve(__dirname,'dist'),
		filename:'[name].js'
	},
	devServer: {
	  contentBase: path.join(__dirname, "dist"),
      compress: true,
      host:"0.0.0.0", //别人可以以ip地址的形式访问你的项目
      port: 9000,//指定服务器端口号
	},
	module: {
		rules: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				include: path.resolve(__dirname,'./')
// 				query: {
// 					presets: ['env'],
// 					plugins: [[
// 						"transform-runtime",
// 						{
// 						  "helpers": false,
// 						  "polyfill": false,
// 						  "regenerator": true,
// 						  "moduleName": "babel-runtime"
// 						}
// 						]]
// 				}
			},
			{
				test: /.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			}
		]
	},
	plugins:[
	    new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({template:'./index.html'})
	]
}