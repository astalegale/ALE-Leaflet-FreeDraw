module.exports = {
    entry: './src/FreeDraw.js',
    output: {
        filename: './dist/ale-leaflet-freedraw.cjs.js',
        libraryTarget: 'commonjs2'
    },
    externals: {
        leaflet: 'ale-leaflet',
        'clipper-lib': 'clipper-lib',
        ramda: 'ramda'
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
