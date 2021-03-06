const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");
console.log("Process", process.env);
module.exports = {
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "application.js",
        chunkFilename: "[name].js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                exclude: /(node_modules)/,
                use: ["babel-loader"]
            },
            {
                test: /\.tsx?$/,
                use: ["awesome-typescript-loader"]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                // vendor chunk
                vendor: {
                    // sync + async chunks
                    chunks: "all",
                    name: "vendor",
                    // import file path containing node_modules
                    test: /node_modules/
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new SimpleProgressWebpackPlugin(),
        function() {
            this.plugin("done", stats => {
                if (
                    stats.compilation.errors &&
                    stats.compilation.errors.length
                ) {
                    console.log("Found following error(s):");
                    stats.compilation.errors.forEach(theError => {
                        console.log(theError.error);
                    });
                    // process.exit(1);
                }
            });
        },
        new webpack.DefinePlugin({
            APP_MODE: JSON.stringify(process.env.MODE)
        })
    ]
};
