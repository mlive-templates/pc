const express = require('express')
const router = express.Router()
const template = require('../../template.js')
router.get('*', function (req, res, next) {
    res.send(template.render('404'))
})
module.exports = router