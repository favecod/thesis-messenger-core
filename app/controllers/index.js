const autoBind = require('auto-bind')
const Models = require(`${config.path.models}`)

module.exports = class Controller {
    constructor() {
        autoBind(this)
        this.model = Models
    }
}