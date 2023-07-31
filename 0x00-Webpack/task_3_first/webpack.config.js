const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    devtool: "inline-source-map",
    entry: {
        header: {
            import: './js/header.js',
            dependOn: 'shared',
        },
        body: {
            import: './js/body.js',
            dependOn: 'shared',
        },
        footer: {
            import: './js/footer.js',
            dependOn: 'shared'
        },
        shared: 'jquery',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    optimization: {
        runtimeChunk: 'single',
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                compress: {
                    drop_console: true,
                },
                mangle: true,
            },
        }),
    ],
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
    devServer: {
        port: 8564,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Output",
        }),
        new CleanWebpackPlugin(),
    ],
};