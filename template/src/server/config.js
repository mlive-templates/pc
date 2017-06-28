var path = require('path')
var fs = require('fs')

const baseConfig = {

    default: {
        name: 'default',
        logs: './logs',
        port: '8092',
        staticServer: '//static1.mtime.cn',
        dbhost: '192.168.50.56',
        dbport: '3306',
        dbdatabase: 'dispatch_db',
        dbuser: 'mtimeuser',
        dbpassword: 'mtimeuser0301'
    },
    dev: {
        name: 'dev',
        staticServer: '',
        dbhost: '192.168.50.56',
        dbport: '3306',
        dbdatabase: 'dispatch_db',
        dbuser: 'mtimeuser',
        dbpassword: 'mtimeuser0301'
    },
    qa: {
        name: 'qa',
        staticServer: '',
        dbhost: '192.168.50.56',
        dbport: '3306',
        dbdatabase: 'dispatch_db',
        dbuser: 'mtimeuser',
        dbpassword: 'mtimeuser0301'
    },
    pre: {
        name: 'pre',
        dbhost: 'db-mysqlmaster00.inc-mtime.com',
        dbport: '3308',
        dbdatabase: 'dispatch_db',
        dbuser: 'mtimeuser',
        dbpassword: 'mtimeuser%^'
    },
    prod: {
        name: 'prod',
        dbhost: 'db-mysqlmaster00.inc-mtime.com',
        dbport: '3308',
        dbdatabase: 'dispatch_db',
        dbuser: 'mtimeuser',
        dbpassword: 'mtimeuser%^'
    }
}

function init() {
    /*eslint-disable*/
    var env = typeof process.env.NODE_ENV === 'undefined' ? 'dev' : process.env.NODE_ENV
    let config
    switch (env) {
        case 'prod':
            config = baseConfig.prod
            break
        case 'pre':
            config = baseConfig.pre
            break
        case 'qa':
            config = baseConfig.qa
            break
        default:
            config = baseConfig.dev
    }
    // console.info('Config.init.success', config.name)

    const dir = path.join(__dirname, '/package.json')
    try {
        const pkgStr = fs.readFileSync(dir, 'utf8')
        const pkg = JSON.parse(pkgStr)
        config.cdn = pkg.cdn
    } catch (error) {
        console.info('can not read package.json')
    }
    return {
        name: get('name', config),
        logs: get('logs', config),
        port: get('port', config),
        staticServer: get('staticServer', config),
        dbhost: get('dbhost', config),
        dbport: get('dbport', config),
        dbdatabase: get('dbdatabase', config),
        dbuser: get('dbuser', config),
        dbpassword: get('dbpassword', config),
        cdn: get('cdn', config),
        startup: new Date()
    }
}

function getConfig(key, store) {
    const info = key.split('.')
    let cur = null
    info.map((item) => {
        if (typeof store[item] !== 'undefined') {
            store = store[item]
            cur = store
        } else {
            cur = null
        }
    })
    return cur
}

function get(key, config) {
    let value = getConfig(key, config)
    if (value === null) {
        value = getConfig(key, baseConfig.default)
        if (value === null) {
            console.warn('defaultConfig is undefined', key)
        }
    }
    return value
}

module.exports = init()