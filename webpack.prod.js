const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports =merge(baseConfig),{
    entry: './src/client/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');


module.exports = {
	devtool: devMode ?
		"eval-cheap-source-map" :
		false,
	module: {
		rules: [
			{
				test: /\.(js|ts)$/,
				use: {
					loader: "ts-loader",
					options: {
						happyPackMode: true,
                        
					},
				},
			},
        ]}}
	plugins [
		new InjectManifest({
			swDest: "sw.js",
			swSrc: "./src/sw.ts",
		})
    ]

    if (currentTask === 'build'){
        config.mode = 'production';
        config.plugins.push(
          new MiniCssExtractPlugin({ filename: 'main.[fullhash].css' }),
          new InjectManifest({
            swSrc: './src/serviceWorker/ServiceWorker.js',
            swDest: 'sw.js'
          })
        );
        config.module.rules[1].use[0] = MiniCssExtractPlugin.loader;
      }
      
      module.exports = config;
      
      function doGet() {
        return HtmlService.createHtmlOutputFromFile('Index');
      }
      
      function doSomething() {
        Logger.log('I was called!');
      }