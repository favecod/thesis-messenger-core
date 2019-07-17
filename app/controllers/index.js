const VERSION = 'v1'
const autoBind = require('auto-bind')
const Models = require(`${config.path.models}`)
const Filters = require(`${config.path.filters}/${VERSION}`)
const verifyToken = require(`${config.path.middlewares}/${VERSION}/verifyToken`)

module.exports = class Controller {
    constructor() {
        autoBind(this)
        this.model = Models
        this.filter = Filters
        this.verifyToken = verifyToken
    }

    errorHandler(msg) {
        return new Error(msg)
    } 
}