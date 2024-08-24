const CopyWebpackPlugin = require('copy-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[fullhash].js'
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                exclude: /\.module\.s?css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.module\.s?css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { modules: true } },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: './public/favicon.ico', to: './favicon.ico' },
                {
                    from: './public/favicon-16x16.png',
                    to: './favicon-16x16.png'
                },
                {
                    from: './public/favicon-32x32.png',
                    to: './favicon-32x32.png'
                },
                { from: './public/manifest.json', to: './manifest.json' }
            ]
        })
    ]
})
