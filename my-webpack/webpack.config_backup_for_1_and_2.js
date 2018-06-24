const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpack = require('webpack')

const ROOT_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(ROOT_PATH, 'app2-js')
const BUILD_PATH = path.resolve(ROOT_PATH, 'app2-js/build')

// if(hot) {
//     console.log('hot in config')
// } else {
//     console.log('not hot in config')
// }

module.exports = {
    entry: APP_PATH,
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    devServer: {
        historyApiFallback: true,
        // hot: true,
        // inline: true,
        progress: false
    },
    module: {
        rules: [
            // {
            //     test: /\.(css|scss)$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader'],
            //     include: APP_PATH
            // },
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
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("styles.css")
    ]
}