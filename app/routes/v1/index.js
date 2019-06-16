const express = require('express')
const router = express.Router()

// API Version
const version = 'v1'
// const Middleware = config.path.middlewares

// Middleware
// const errorHandler = require(`${Middleware}/${version}/errorHandler`)

// Routes
const info = require('./info')
const public = require('./public')
// const private = require('./private')
// const admin = require('./admin')

router.use(info)
router.use(public)
// router.use(private)
// router.use(admin)

// Error Handler
// router.use('*', errorHandler.error404)
// router.use(errorHandler.handler)

module.exports = router