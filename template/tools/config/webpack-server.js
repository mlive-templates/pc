const path = require('path')
const rootPath = path.join(__dirname, '/../../')
const nodeExternals = require('webpack-node-externals')
const config = {
    entry: {
        app: path.join(rootPath, '/src/server/index.js')
    },
    target: 'node',
    output: {
        path: path.join(rootPath, 'build'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js']
    },
    externals: [nodeExternals({
        modulesDir: path.join(rootPath, 'node_modules')
    })],
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: false,
        __dirname: false,
        setImmediate: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
}

function getConfig() {
    return config
}
module.exports = {
    getConfig
}