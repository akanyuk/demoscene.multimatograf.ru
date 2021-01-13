const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry: path.join(__dirname, '../src/index'),
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    devServer: {
        overlay: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.(ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                },
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/templates/index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "public", to: "" },
            ],
        }),
    ],
};

module.exports = config;