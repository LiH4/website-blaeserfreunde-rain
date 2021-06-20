const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

// for production mode
module.exports = merge(common.config, {
    mode: 'production',
    optimization: {
        nodeEnv: 'production'
    }
});