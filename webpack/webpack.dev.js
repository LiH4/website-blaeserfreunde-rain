const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

// for develop mode
module.exports = merge(common.config, {
    mode: 'development',
    devtool: 'inline-source-map',
    optimization: {
        nodeEnv: 'development'
    }
});