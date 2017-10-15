const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const config = {
    entry: './client/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react'],
                },
            },
        ],
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
        ],
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'client'),
        historyApiFallback: true,
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.EnvironmentPlugin(['NODE_ENV']),
    ],
};


module.exports = config;
