const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const config = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
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
        contentBase: path.join(__dirname, 'src'),
        historyApiFallback: true,
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
    ],
};


module.exports = config;
