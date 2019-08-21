const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//const postcss - loader = require('postcss-loader')
const autoprefixer = require('autoprefixer')

module.exports = function () {
    return {
        module: {
            rules: [{
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    //"style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers: ['ie >= 8', 'last 4 version']
                                })
                            ],
                            sourceMap: true
                        }
                    },
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }]
        }
    }
}