// Controller
const VERSION = 'v1'
const CONTROLLERS  = config.path.controllers
const Login = require(`${CONTROLLERS}/${VERSION}/auth/Login`)

module.exports = {
    Query: {
        login: (_, args) => Login.handle(args)
    }
}