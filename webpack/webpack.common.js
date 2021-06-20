const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const banner = require('./banner');

const SRC_PATH = path.resolve(__dirname, '../src');
const DIST_PATH = path.resolve(__dirname, '../dist');   // oder '.../docs' für GitHub Pages

const config = {
    // entry point
    entry: {
        app: './ts/index.ts'
    },
    // target directory for all output files
    output: {
        path: DIST_PATH,
        filename: 'js/[name].bundle.js',
        sourceMapFilename: 'js/[name].bundle.js.map',
        publicPath: ''
    },
    // options for resolving module requests
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    // home directory for webpack
    context: SRC_PATH,
    // list of additional plugins
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.BannerPlugin({
            banner
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                'js/*.bundle.js',
                'css/*.bundle.css'
            ]
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, SRC_PATH, 'images'),
                    to: path.resolve(__dirname, DIST_PATH, 'images')
                }
                ,
                {
                    from: path.resolve(__dirname, SRC_PATH, 'assets'),
                    to: path.resolve(__dirname, DIST_PATH, 'assets')
                }
            ]
        })
    ],
    // directories where to look for modules
    module: {
        rules: [
            // ts-loader handles typescript files
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            // file-loader handles scss files, among other things
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'css/[name].bundle.css',
                        }
                    },
                    'extract-loader',
                    'css-loader?-url',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            // for svg images
            {
                test: /\.svg$/,
                loader: 'file-loader'
            }
        ]
    }
};

module.exports = {
    SRC_PATH,
    DIST_PATH,
    config
};