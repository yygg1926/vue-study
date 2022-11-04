var path = require('path');

module.exports = {
    mode : 'none',  // production, development, none
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'  // [chunkhash][name].js
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    stats: {
        color: true
    },
    devtool: 'source-map'
};