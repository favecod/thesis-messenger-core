const Controller = require(`${config.path.controllers}`)
const Body = require(`${config.path.helpers}/Body`)
const bcrypt = require('bcrypt')

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

    async edit(args, context) {
        try {
            if (!context.token)
                return new Error('Athentication Faild')

            const { USERS } = this.model
            let body = Body.extract(args.user)

            const user = await USERS.findByIdAndUpdate(context.token.id, { $set: body })
            if (!user) return new Error('Try Again')
            
            const modifiedUser = await USERS.findById(context.token.id)
            if (!modifiedUser) return new Error('User not found')
            return this.filter.users.show(modifiedUser)

        } catch (err) {
            return new Error(err)
        }
    }
}

module.exports = new Users