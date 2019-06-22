// Controller
const VERSION = 'v1'
const CONTROLLERS  = config.path.controllers
const Register = require(`${CONTROLLERS}/${VERSION}/auth/Register`)

module.exports = {
    Query: {
        register: (_, args) => Register.handle(args)
    }
}