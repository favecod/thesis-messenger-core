const VERSION = 'v1'
const autoBind = require('auto-bind')
const Models = require(`${config.path.models}`)
const Filters = require(`${config.path.filters}/${VERSION}`)

module.exports = class Controller {
    constructor() {
        autoBind(this)
        this.model = Models
        this.filter = Filters
    }

    errorHandler(msg) {
        return new Error(msg)
    } 
}