const log4js = require('log4js')
const config = require('./config')
// const fs = require('fs-extra')

function init() {
    /*eslint-disable indent */
    const logconfig = {
        'replaceConsole': true,
        'appenders': [{
            'type': 'console',
            'category': 'console'
        }]
    }
    log4js.configure(logconfig)
}
init()
// var category = config.name === 'dev' ? 'console' : 'dataFileLog'
var logger = log4js.getLogger('console')
logger.setLevel(config.name === 'dev' ? 'info' : 'error')

function httpLogger() {
    return log4js.connectLogger(logger, {
        level: 'info'
    })
}
module.exports.logger = logger
module.exports.use = httpLogger