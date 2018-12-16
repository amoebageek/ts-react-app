const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry:
		'./src/index.js',
	output: {
		path: path.resolve(
			__dirname,
			'dist',
		),
		filename:
			'application.js',
		chunkFilename:
			'[name].js',
	},
	mode:
		'development',
	module: {
		rules: [
			{
				test: /\.js|.jsx$/,
				exclude: /(node_modules)/,
				use: [
					'babel-loader',
					'eslint-loader',
				],
			},
		],
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				default: false,
				vendors: false,
				// vendor chunk
				vendor: {
					// sync + async chunks
					chunks:
						'all',
					name:
						'vendor',
					// import file path containing node_modules
					test: /node_modules/,
				},
			},
		},
	},
	plugins: [
		new HtmlWebpackPlugin(
			{
				template:
					'./src/index.html',
			},
		),
	],
};
