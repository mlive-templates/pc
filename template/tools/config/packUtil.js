const webpack = require('webpack')
const ora = require('ora')
const spinner = ora('正在编译本地环境...')
const chalk = require('chalk')
spinner.start()

function packProd(wpClientConfig, wpServerConfig) {
    Promise.all([packProdClient(wpClientConfig), packProdServer(wpServerConfig)]).then(val => {
        console.log('编译成功...')
        spinner.stop()
    }).catch((err) => {
        console.log('编译出现错误...')
        console.log(err)
    })
}

function packDev(wpClientConfig, wpServerConfig) {
    Promise.all([packDevClient(wpClientConfig), packDevServer(wpServerConfig)]).then(val => {
        spinner.stop()
        console.log(chalk.cyan('    编译成功...'))
        console.log(chalk.yellow('    Tip: npm run dev更新代码!'))
    }).catch((err) => {
        console.log(chalk.red('编译出现错误...'))
        console.log(err)
    })
}

function packProdClient(wpConfig) {
    return new Promise((resolve, reject) => {
        const compiler = webpack(wpConfig)
        compiler.run((err, stats) => {
            if (err === null && stats.compilation.errors.length === 0) {
                console.log('client端编译完成...')
                resolve()
            } else {
                reject('client编译出现错误..' + stats.compilation.errors[0].message)
            }
        })
    })
}

function packProdServer(wpConfig) {
    return new Promise((resolve, reject) => {
        const compiler = webpack(wpConfig)
        compiler.run((err, stats) => {
            if (err === null && stats.compilation.errors.length === 0) {
                console.log('server端编译完成...')
                resolve()
            } else {
                reject('server编译出现错误..' + stats.compilation.errors[0].message)
            }
        })
    })
}

function packDevClient(wpConfig) {
    return new Promise((resolve, reject) => {
        const compiler = webpack(wpConfig)

        compiler.watch({
            aggregateTimeout: 300,
            poll: true
        }, (err, stats) => {
            if (err === null && stats.compilation.errors.length === 0) {
                console.log('client端编译完成')
                resolve()
            } else {
                reject('client编译出现错误..' + stats.compilation.errors[0].message)
            }
        })
    })
}

function packDevServer(wpConfig) {
    return new Promise((resolve, reject) => {
        const compiler = webpack(wpConfig)
        compiler.watch({
            aggregateTimeout: 300,
            poll: true
        }, (err, stats) => {
            if (err === null && stats.compilation.errors.length === 0) {
                console.log('server端编译完成')
                resolve()
            } else {
                reject('server编译出现错误...' + stats.compilation.errors[0].message)
            }
        })
    })
}

module.exports = {
    packProd,
    packDev
}