const Controller = require(`${config.path.controllers}`)

class Contact extends Controller {
    async add(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('احراز هویت تایید نشد')
            
            const { USERS, USERS_CONTACTS } = this.model
            const user = await USERS.findById(context.token.id)
            const friend = await USERS.findById(args.id)
            if (!user || !friend) return this.errorHandler('آي دی درست نیست')
                
            const opt = {
                userId: context.token.id,
                friendId: args.id,
            }
            const contact = await USERS_CONTACTS.findOne(opt)
            if (contact) return this.errorHandler('کاربر قبلا در لیست دوستان شما قرار گرفته است')

            const newContact = await USERS_CONTACTS.create(opt)
            const userCounter = await USERS.findByIdAndUpdate(context.token.id, {
                $inc: {
                    followingsCounter: 1
                }
            })
            const friendCounter = await USERS.findByIdAndUpdate(args.id, {
                $inc: {
                    followersCounter: 1
                }
            })
            if (!newContact || !userCounter || !friendCounter) {
                return this.errorHandler('کاربر قبلا در لیست دوستان شما قرار گرفته است')
            }
            
            return this.filter.contacts.addFriend(friendCounter)

        } catch (err) {
            return this.errorHandler(err)
        }
    }

    async remove(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('احراز هویت تایید نشد')

            const { USERS, USERS_CONTACTS } = this.model
            const user = await USERS.findById(context.token.id)
            const friend = await USERS.findById(args.id)
            if (!user || !friend) return this.errorHandler('آي دی درست نیست')

            const opt = {
                userId: context.token.id,
                friendId: args.id,
            }
            const contact = await USERS_CONTACTS.findOneAndDelete(opt)
            if (!contact) return this.errorHandler('شما چنین کاربری در لیست دوستان خود نداشتید')

            const userCounter = await USERS.findByIdAndUpdate(context.token.id, {
                $inc: {
                    followingsCounter: -1
                }
            })
            const friendCounter = await USERS.findByIdAndUpdate(args.id, {
                $inc: {
                    followersCounter: -1
                }
            })
            if (!userCounter || !friendCounter) {
                return this.errorHandler('کاربر قبلا در لیست دوستان شما قرار گرفته است')
            }

            return this.filter.contacts.removeFriend(friendCounter)
        } catch (err) {
            return this.errorHandler(err)
        }
    }
    
}

module.exports = new Contact