const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './js/dashboard_main.js'),
    },
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    performance: {
        hints: "warning",
        maxAssetSize: 512000,
        maxEntrypointSize: 512000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Output",
        })
    ],
};