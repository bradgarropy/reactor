const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');


const config = merge(common, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.API_URL': JSON.stringify('https://weighter-api-dev.herokuapp.com'),
        }),
    ],
});


module.exports = config;
