// const path = require('path')
const rootPath = getRootPath()


function getRootPath() {
    // let rootPath = process.cwd()
    // 如果运行的是npm run dev时
    // if (!process.env.NODE_ENV) {
    //     rootPath = path.join(rootPath, '/build')
    // }
    // console.log('--rootPath-->', rootPath)
    console.error(process.cwd())
    return process.cwd()
}
const staticServer = {
    'dev': '/',
    'qa': '/',
    'pre': '//static1.mtime.cn/',
    'prod': '//static1.mtime.cn/'
}

module.exports = {
    rootPath,
    staticServer
}