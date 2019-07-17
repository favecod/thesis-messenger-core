const express = require('express')
const server = require(`${config.path.graphql}/v1`)
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

module.exports = class Application {
    constructor() {
        this.mongooseConfig()
        this.expressConfig()
        this.serverConfig()
    }
    // SERVER
    serverConfig() {
        server.listen().then(({ url }) => {
            console.log(`🚀 Server ready at ${url}`);
        });
        // app.listen(config.port, () =>
        //     console.log(`Connected to Localhost:${config.port}`)
        // )
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
        app.use('/public', express.static('public'))
    }
}
