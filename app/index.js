const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const validator = require('express-validator')

module.exports = class Application {
    constructor() {
        this.mongooseConfig()
        this.expressConfig()
        this.routerConfig()
        this.portConfig()
    }
    // PORT
    portConfig() {
        app.listen(config.port, () =>
            console.log(`Connected to Localhost:${config.port}`)
        )
    }
    // DATABASE
    mongooseConfig() {
        mongoose.Promise = global.Promise
        mongoose.connect(config.database.url, config.database.options)
    }
    // EXPRESS
    expressConfig() {
        app.use(
            bodyParser.urlencoded({
                extended: false
            })
        )
        app.use(bodyParser.json())
        app.use(validator())
        app.use('/public', express.static('public'))
    }
    // ROUTER
    routerConfig() {
        
    }
}
