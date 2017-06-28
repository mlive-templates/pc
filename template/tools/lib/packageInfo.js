const path = require('path')
const rootPath = path.normalize(path.join(__dirname, '/../../'))
const fs = require('fs-extra')
const dateUtil = require('./dateUtil.js')
// 拷贝package.json文件到build下
function copy() {
    const packageInfo = fs.readJsonSync(rootPath + '/package.json')
    const name = packageInfo.name
    const version = dateUtil.formatFullDate()
    const cdn = name + '/' + version
    packageInfo.cdn = cdn
    // 删除client
    fs.removeSync(path.join(rootPath, 'build', 'client'))
    // 创建文件夹
    const fileDir = path.join(rootPath, 'build', 'client', cdn)
    fs.mkdirsSync(fileDir)
    // 写入package.json
    const packageDir = path.join(rootPath, 'build')
    fs.writeJSONSync(packageDir + '/package.json', packageInfo)


    // 如果存在npm-shirnkwrap.json 文件则拷贝到build目录下
    if (fs.existsSync(rootPath + '/npm-shrinkwrap.json')) {
        const content = fs.readJsonSync(rootPath + '/npm-shrinkwrap.json')
        fs.writeJSONSync(packageDir + '/npm-shrinkwrap.json', content)
    }
    if (!fs.existsSync(rootPath + '/tools/config/app.json')) {
        console.error('不存在app.json')
    } else {
        fs.copySync(rootPath + '/tools/config/app.json', rootPath + '/build/config/app.json')
    }
}

function getInfo() {
    const packageInfo = fs.readJsonSync(path.join(rootPath, '/package.json'))
    return packageInfo
}



module.exports = {
    copy,
    getInfo
}