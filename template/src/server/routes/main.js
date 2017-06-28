const express = require('express')
const router = express.Router()

const viewRouter = require('./view/view')
const viewErrorPageRouter = require('./view/errorPage')

router.use('/', viewRouter)
router.use('*', viewErrorPageRouter)

module.exports = router