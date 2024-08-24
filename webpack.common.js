const HtmlWebpackPlugin = require('html-webpack-plugin')
const { LoaderOptionsPlugin } = require('webpack')
const autoprefixer = require('autoprefixer')
const path = require('path')

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(svg|png|jpg|webp)$/,
                type: 'asset'
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, './src/')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer()]
            }
        })
    ]
}
