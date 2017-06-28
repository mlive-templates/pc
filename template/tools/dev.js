const wpClientConf = require('./config/webpack-client.js')
const packageInfo = require('./lib/packageInfo.js')
const wpServerConf = require('./config/webpack-server.js')
const packUtil = require('./config/packUtil.js')

// 1.创建/删除build目录, 拷贝package.json文件

packageInfo.copy()
// spinner.stop()
// 2.打包任务
packUtil.packDev(wpClientConf.getConfig(), wpServerConf.getConfig())