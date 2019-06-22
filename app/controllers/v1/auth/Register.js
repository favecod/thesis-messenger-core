const Controller = require(`${config.path.controllers}`)
const Models = require(`${config.path.models}`)

class Register extends Controller {
    async handle(args) {
        try {
            const { Users } = Models
            const user = await Users.create(args)
            if (user) {
                return {
                    username: args.username
                }
            } 
        } catch (err) {
            return new Error(err)
        }
    }
}

module.exports = new Register