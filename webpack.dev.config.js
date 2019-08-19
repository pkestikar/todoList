const path = require('path');

module.exports = {
    mode: 'development',
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
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            Components: path.resolve(__dirname, 'app/components/'),
            Constants: path.resolve(__dirname, 'app/constants'),
            Actions: path.resolve(__dirname, 'app/actions'),
            Reducers: path.resolve(__dirname, 'app/reducers')
        }
    }
};
