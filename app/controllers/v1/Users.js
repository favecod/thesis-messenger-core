const Controller = require(`${config.path.controllers}`)
const jwt = require('jsonwebtoken')

class Users extends Controller {
    async getUser(args, context) {
        try {
            if(!context.token)
                return new Error('Athentication Faild')
                
            const { Users } = this.model
            const user = await Users.findOne({ username: args.username })
            if (user) {
                return {
                    id: user.id,
                    fullname: user.fullname,
                    username: user.username,
                }
            }
        } catch (err) {
            return new Error(err)
        }
    }
}

module.exports = new Users