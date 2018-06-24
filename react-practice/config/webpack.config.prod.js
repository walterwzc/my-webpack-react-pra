const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        'scripts/app': './src/index.js',
        'vendor/react': 'react',
        'vendor/react-dom': 'react-dom'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]-[hash:6].js'
    },
    devtool: 'source-map',
    module:{
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                },
                exclude: /node_modules/
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin('build/*.*', {
            root: path.resolve(__dirname, "../"),
            verbose: true,
            dry: false
        }),
        new ExtractTextPlugin("styles/styles.css"),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './src/index.html',
            filename: './index.html'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                'react': {
                    test: /react/,
                    chunks: 'initial',
                    name: 'vendor/react',
                    priority: 10
                },
                'react-dom': {
                    test: /react-dom/,
                    chunks: 'initial',
                    name: 'vendor/react-dom',
                    priority: 10
                }
            }
        }
    }
}