const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'scripts/index': './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dev'),
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dev'),
        host: 'localhost',
        port: 8091,
        open: true,
        hot: true,
        inline: true,
        proxy: {
            '/api': {
                target: 'https://api.douban.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]', 'sass-loader']
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 50,
                            outputPath: 'images'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/index.html'
        })
    ]
}
