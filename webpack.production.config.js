const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: "./app/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css'
        })
    ],
    resolve: {
        alias: {
            Components: path.resolve(__dirname, 'app/components/'),
            Constants: path.resolve(__dirname, 'app/constants'),
            Actions: path.resolve(__dirname, 'app/actions'),
            Reducers: path.resolve(__dirname, 'app/reducers'),
            Containers: path.resolve(__dirname, 'app/containers')
        }
    }
};
