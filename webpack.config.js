var HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = './weboack-options/html-webpack-plugin.json';

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'./common.js'
    },
    module:{
        rules:[
                {
                test:'/\.js$/',
                exclude:'/node_modules/',
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(HtmlWebpackPluginConfig)
    ]
}