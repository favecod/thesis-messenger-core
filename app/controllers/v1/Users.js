const Controller = require(`${config.path.controllers}`)
const Body = require(`${config.path.helpers}/Body`)
const bcrypt = require('bcrypt')

class Users extends Controller {
    async show(args, context) {
        try {
            if(!context.token)
                return this.errorHandler('Athentication Faild')
                
            const { USERS } = this.model
            const user = await USERS.findOne({ username: args.username })
            if (user) return this.filter.users.show(user)

        } catch (err) {
            return this.errorHandler(err)
        } 
    }

    async edit(args, context) {
        try {
            if (!context.token)
                return this.errorHandler('Athentication Faild')

            const { USERS } = this.model
            let body = Body.extract(args.user)

            const user = await USERS.findByIdAndUpdate(context.token.id, { $set: body })
            if (!user) return this.errorHandler('Try Again')
            
            const modifiedUser = await USERS.findById(context.token.id)
            if (!modifiedUser) return this.errorHandler('User not found')
            return this.filter.users.show(modifiedUser)

        } catch (err) {
            return this.errorHandler(err)
        }
    }

    async changePassword(args, context) {
        try {
            if (!context.token)
                return this.errorHandler('Athentication Faild')

            const { USERS } = this.model
            
            if (args.password !== args.confirmPassword) return this.errorHandler('Passwords is not the same')

            let user = await USERS.findById(context.token.id)
            if (!user || !bcrypt.compareSync(args.oldPassword, user.password)) {
                return this.errorHandler('Old password is wrong')
            } 

            if (args.oldPassword === args.password) return this.errorHandler('New password should be different with old password')

            const salt = bcrypt.genSaltSync(15)
            args.password = bcrypt.hashSync(args.password, salt)

            let body = {
                password: args.password
            }

            let newUser = await USERS.findByIdAndUpdate(context.token.id, { $set: body })
            if (!newUser) return this.errorHandler('Try Again')

            const modifiedUser = await USERS.findById(context.token.id)
            if (!modifiedUser) return this.errorHandler('User not found')
            return this.filter.users.show(modifiedUser)
            

        } catch (err) {
            return this.errorHandler(err)
        }
    }
}

module.exports = new Users