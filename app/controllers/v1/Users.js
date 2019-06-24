const Controller = require(`${config.path.controllers}`)

class Users extends Controller {
    async show(args, context) {
        try {
            if(!context.token)
                return new Error('Athentication Faild')
                
            const { USERS } = this.model
            const user = await USERS.findOne({ username: args.username })
            if (user) return this.filter.users.show(user)

        } catch (err) {
            return new Error(err)
        }
    }
}

module.exports = new Users