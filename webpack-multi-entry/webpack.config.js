var path = require('path')

// import 'core-js/stable';
// import 'regenerator-runtime/runtime'

module.exports = {
    entry: {
        app: './a.js',
        app2: './f.js'
    },
    output: {
        path: path.resolve(__dirname, ''),
        filename: '[name].js'
        // filename: 'bundle[fullhash].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    mode: 'none'
}