const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCSS = new ExtractTextPlugin('styles/[name]-one.css');
const extractSCSS = new ExtractTextPlugin('styles/[name]-two.css');

const webpack = require('webpack')

const ROOT_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(ROOT_PATH, 'app3-trunk')
const BUILD_PATH = path.resolve(ROOT_PATH, 'build')

module.exports = {
    entry: {
        index: "./app3-trunk/index.js",
        mobel: "./app3-trunk/mobel.js"
    },
    output: {
        path: path.resolve(__dirname, 'app3-trunk/dev'),
        filename: "[name].boundle.js"
    },
    devServer: {
        historyApiFallback: true,
        // hot: true,
        // inline: true,
        progress: false
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                }),
                include: APP_PATH
            },
            {
                test: /\.js?$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'hello webpack in plugin222'
        }),
        new ExtractTextPlugin("styles/styles.css")
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                'lodash': {
                    test: /lodash/,
                    chunks: 'initial',
                    name: 'vendor/lodash',
                    priority: 10
                }
            }
        }
    }
}



