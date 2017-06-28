const webpack = require('webpack')
const merge = require('webpack-merge')
const packageInfo = require('./lib/packageInfo.js')
const wpClientConf = require('./config/webpack-client.js')
const wpServerConf = require('./config/webpack-server.js')
const packUtil = require('./config/packUtil.js')

// 1.创建/删除build目录, 拷贝package.json文件
packageInfo.copy()

// 生成线上环境Client端webpack配置文件
const prodWpCientConf = merge(wpClientConf.getConfig(), {
    devtool: false,
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
})

// 生成线上环境Server端webpack配置文件
const prodWpServerConf = wpServerConf.getConfig()

// 2.打包任务
packUtil.packProd(prodWpCientConf, prodWpServerConf)