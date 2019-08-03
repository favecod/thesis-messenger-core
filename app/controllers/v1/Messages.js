const Controller = require(`${config.path.controllers}`)
const Body = require(`${config.path.helpers}/Body`)

class Message extends Controller {
    async add(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('احراز هویت تایید نشد')

            const { MESSAGES, USERS } = this.model
            let body = Body.extract(args)
            body.userId = this.verifyToken(context.req.headers.token).id
            let message = await MESSAGES.create(body)
            const user = await USERS.findById(body.userId)
            message.user = user
            if (message) return this.filter.messages.show(message)

        } catch (err) {
            return this.errorHandler(err)
        }
    }

    async showAll(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('احراز هویت تایید نشد')

            const { MESSAGES } = this.model
            const messages = await MESSAGES.find(args).populate('user')
            if (messages) return this.filter.messages.showAll(messages)

        } catch (err) {
            return this.errorHandler(err)
        }
    }
}

module.exports = new Message