module.exports = {
    entry: ['babel-polyfill', './src/FreeDraw.js'],
    output: {
        filename: './dist/ale-leaflet-freedraw.web.js',
        libraryTarget: 'var'
    },
    externals: {
        leaflet: 'L'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/i
            }
        ]
    }
};
