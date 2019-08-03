const Controller = require(`${config.path.controllers}`)
const Body = require(`${config.path.helpers}/Body`)
const bcrypt = require('bcrypt')

class Users extends Controller {
    async show(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('احراز هویت تایید نشد')
                
            const { USERS } = this.model
            const user = await USERS.findOne({ username: args.username })
            if (user) return this.filter.users.show(user)

        } catch (err) {
            return this.errorHandler(err)
        } 
    }

    async showAll(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('احراز هویت تایید نشد')

            const { USERS } = this.model
            const users = await USERS.find({})
            if (users) return this.filter.users.showAll(users)

        } catch (err) {
            return this.errorHandler(err)
        } 
    }
    
    async delete(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('احراز هویت تایید نشد')

            const { USERS } = this.model
            const user = await USERS.findByIdAndDelete(args.id)
            if (user) return this.filter.users.show(user)

        } catch (err) {
            return this.errorHandler(err)
        }
    }

    async edit(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('احراز هویت تایید نشد')

            const { USERS } = this.model
            let body = Body.extract(args.user)

            const user = await USERS.findByIdAndUpdate(context.token.id, { $set: body })
            if (!user) return this.errorHandler('دوباره تلاش کنید')
            
            const modifiedUser = await USERS.findById(context.token.id)
            if (!modifiedUser) return this.errorHandler('کاربر یافت نشد')
            return this.filter.users.show(modifiedUser)

        } catch (err) {
            return this.errorHandler(err)
        }
    }

    async changePassword(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('احراز هویت تایید نشد')

            const { USERS } = this.model
            
            if (args.password !== args.confirmPassword) return this.errorHandler('رمز عبور و تایید آن درست نیست')

            let user = await USERS.findById(context.token.id)
            if (!user || !bcrypt.compareSync(args.oldPassword, user.password)) {
                return this.errorHandler('پسورد قبلی اشتباه است')
            } 

            if (args.oldPassword === args.password) return this.errorHandler('پسورد جدید باید با پسورد قبلی تفاوت داشته باشد')

            const salt = bcrypt.genSaltSync(15)
            args.password = bcrypt.hashSync(args.password, salt)

            let body = {
                password: args.password
            }

            let newUser = await USERS.findByIdAndUpdate(context.token.id, { $set: body })
            if (!newUser) return this.errorHandler('دوباره تلاش کنید')

            const modifiedUser = await USERS.findById(context.token.id)
            if (!modifiedUser) return this.errorHandler('کاربر یافت نشد')
            return this.filter.users.show(modifiedUser)
            

        } catch (err) {
            return this.errorHandler(err)
        }
    }
}

module.exports = new Users