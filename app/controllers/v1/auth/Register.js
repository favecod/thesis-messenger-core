const Controller = require(`${config.path.controllers}`)
const bcrypt = require('bcrypt')

class Register extends Controller {
    async handle(args) {
        try {
            const { Users } = this.model
            const salt = bcrypt.genSaltSync(15)
            args.password = bcrypt.hashSync(args.password, salt)
            const user = await Users.create(args)

            if (user) {
                return {
                    id: user._id,
                    fullname: user.fullname,
                    username: user.username
                }
            } 

        } catch (err) {
            return new Error(err)
        }
    }
}

module.exports = new Register