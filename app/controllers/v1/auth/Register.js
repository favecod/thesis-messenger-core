const Controller = require(`${config.path.controllers}`)
const bcrypt = require('bcrypt')

class Register extends Controller {
    async handle(args) {
        try {
            const { USERS } = this.model
            const salt = bcrypt.genSaltSync(15)
            args.password = bcrypt.hashSync(args.password, salt)
            const user = await USERS.create(args)

            if (user) return this.filter.auth.register(user)

        } catch (err) {
            return this.errorHandler(err)
        }
    }
}

module.exports = new Register