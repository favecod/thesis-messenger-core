const Controller = require(`${config.path.controllers}`)
const Models = require(`${config.path.models}`)
const bcrypt = require('bcrypt')

class Register extends Controller {
    async handle(args) {
        try {
            const { Users } = Models
            const salt = bcrypt.genSaltSync(15)
            args.password = bcrypt.hashSync(args.password, salt)
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