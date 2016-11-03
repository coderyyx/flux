/**
 * Created by yyx on 2016/11/3.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main:'./src/index.js'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: '[name].js'
    },
    watch: true,
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets: ['es2015', 'react']}
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    plugins: [

        //new webpack.optimize.UglifyJsPlugin({
        //
        //    compress: {
        //
        //        warnings: false
        //
        //    }
        //
        //}),
        new webpack.NoErrorsPlugin()

    ]
};