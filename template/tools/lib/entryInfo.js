const path = require('path')
const fs = require('fs-extra')
const rootPath = path.join(__dirname, '/../../')

function getEntry() {
    const readPath = path.join(rootPath, '/src/client')
    const files = fs.readdirSync(readPath)
    const entry = {}
    entry.vendors = [
        'vue'
    ]
    files.map((val, index) => {
        if (val.indexOf('.js') > -1) {
            const name = val.substr(val.lastIndexOf('/') + 1, val.indexOf('.js'))
            entry[name] = readPath + '/' + val
        }
    })
    return entry
}

function getEntryForHTML() {
    const readPath = path.join(rootPath, '/src/client')
    const files = fs.readdirSync(readPath)
    const fileArr = []
    files.map((val, index) => {
        if (val.indexOf('.js') > -1) {
            const name = val.substr(val.lastIndexOf('/') + 1, val.indexOf('.js'))
            fileArr.push(name)
        }
    })
    return fileArr
}

module.exports = {
    getEntry,
    getEntryForHTML
}