const VERSION = 'v1'
const CONTROLLERS = config.path.controllers
const Login = require(`${CONTROLLERS}/${VERSION}/auth/Login`)
const Register = require(`${CONTROLLERS}/${VERSION}/auth/Register`)

const resolvers = {
    Query: {
        login: (_, args) => Login.handle(args),
    },
    Mutation: {
        register: (_, args) => Register.handle(args)
    }
}

module.exports = resolvers