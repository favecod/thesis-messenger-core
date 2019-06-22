const express = require('express')
const server = require(`${config.path.graphql}`)
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const validator = require('express-validator')
const cors = require('cors')

module.exports = class Application {
    constructor() {
        this.mongooseConfig()
        this.expressConfig()
        this.serverConfig()
    }
    // Server
    serverConfig() {
        server(app)
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
        app.use(cors())
        app.use(
            bodyParser.urlencoded({
                extended: false
            })
        )
        app.use(bodyParser.json())
        app.use(validator())
        app.use('/public', express.static('public'))
    }
}
