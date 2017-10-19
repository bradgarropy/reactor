const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


const config = merge(common, {
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.API_URL': JSON.stringify(process.env.API_URL),
        }),
    ],
});


module.exports = config;
