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
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
}

const common = merge([{
        entry: {
            'index': PATHS.source + '/pages/index/index.js',
            'form-elements': PATHS.source + '/pages/form-elements/form-elements.js',
            'colors-and-types': PATHS.source + '/pages/colors-and-types/colors-and-types.js',
            'cards': PATHS.source + '/pages/cards/cards.js'
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
            new HtmlWebpackPlugin({
                filename: 'form-elements.html',
                chunks: ['form-elements', 'common'],
                template: PATHS.source + '/pages/form-elements/form-elements.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'colors-and-types.html',
                chunks: ['colors-and-types', 'common'],
                template: PATHS.source + '/pages/colors-and-types/colors-and-types.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'cards.html',
                chunks: ['cards', 'common'],
                template: PATHS.source + '/pages/cards/cards.pug'
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                // chunks: ['index', 'common', 'form-elements']
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })
        ]
    },
    pug(),
    scss(),
    images(),
    fonts()
])

module.exports = function (env) {
    if (env === 'production') {
        return common
    }
    if (env === 'development') {
        return merge([
            common,
        devServer()
        ])
    }
}