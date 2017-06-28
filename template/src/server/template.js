const config = require('./config')

function render(name) {
    const staticServer = config.staticServer
    const cdn = config.cdn
    const env = config.name
    const startup = config.startup
    const jsPath = staticServer + '/' + cdn + '/script'
    const cssPath = staticServer + '/' + cdn + '/css'
    const html = `
    <!doctype html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="renderer" content="webkit" />
        <meta name="360-fullscreen" content="true" />
        <meta name="x5-fullscreen" content="true" />
        <meta name="full-screen" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="http-equiv=X-UA-COMPATIBLE" content="IE=edge,chrome=1" />
        <meta name="startup" content="${startup}" />
        <meta content="${cdn}" name="cdn">
        <meta content="${env}" name="env">
        <link type="image/x-icon" href="//static1.mtime.cn/favicon.ico" rel="shortcut icon" />
        <link type="image/x-icon" href="//static1.mtime.cn/favicon.ico" rel="bookmark" />
        <link rel="apple-touch-icon" href="//static1.mtime.cn/favicon.ico" />
        <link rel="stylesheet" href="${cssPath}/${name}.css">
        <title>时光分发平台</title>
    </head>
    <body>
        <div id="app"></div>
        <script type="text/javascript" src="${jsPath}/vendors.js"></script>
        <script type="text/javascript" src="${jsPath}/${name}.js"></script>
    </body>
    </html>
    `
    return html
}

module.exports = {
    render
}