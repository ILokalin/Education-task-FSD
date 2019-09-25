const path = require('path')
const merge = require('webpack-merge')
const pug = require('./webpack/pug')
const scss = require('./webpack/scss')
const images = require('./webpack/images')
const fonts = require('./webpack/fonts')
const devServer = require('./webpack/devserver')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const autoprefixer = require('autoprefixer');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
}

const common = merge([{
        entry: {
            'index': PATHS.source + '/pages/index/index.js'
        },
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },
        optimization: {
            minimizer: [
                new OptimizeCssAssetsWebpackPlugin({})
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.source + '/pages/index/index.pug'
            }),
            new MiniCssExtractPlugin({
                filename: 'style.css'
            })
        ]
    },
    pug(),
    scss(),
    images(),
    fonts()
])

module.exports = function (env) {
    if (env === 'prodduction') {
        return common
    }
    if (env === 'development') {
        return merge([
            common,
        devServer()
        ])
    }
}