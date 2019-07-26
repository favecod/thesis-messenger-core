const Controller = require(`${config.path.controllers}`)
const Body = require(`${config.path.helpers}/Body`)

class Groups extends Controller {
    async add(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('Athentication Faild')

            const { GROUPS } = this.model
            let body = Body.extract(args.group)
            
            const group = await GROUPS.create(body)

            if (group) return this.filter.groups.show(group)

        } catch (err) {
            return this.errorHandler(err)
        }
    }

    async delete(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('Athentication Faild')

            const { GROUPS } = this.model
            const group = await GROUPS.findByIdAndDelete(args.id)

            if (group) return this.filter.groups.show(group)

        } catch (err) {
            return this.errorHandler(err)
        }
    }

    async join(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('Athentication Faild')

            const { USERS_GROUPS } = this.model
            const res = await USERS_GROUPS.findOne(args)
            if (res) return this.errorHandler('You had joined before')

            const user_group = await USERS_GROUPS.create(args)

            if(user_group) {
                let result = await USERS_GROUPS.findOne(args).populate('user').populate('group')
                if (result) return this.filter.groups.usersGroups(result)
            }

        } catch (err) {
            return this.errorHandler(err)
        }
    }

    async leave(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('Athentication Faild')

            const { USERS_GROUPS } = this.model
            const res = await USERS_GROUPS.findOneAndDelete(args).populate('user').populate('group')
            if (!res) return this.errorHandler('You had not joined before')

            return this.filter.groups.usersGroups(res)

        } catch (err) {
            return this.errorHandler(err)
        }
    }

    async showUsers(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('Athentication Faild')

            const { USERS_GROUPS } = this.model
            const users = await USERS_GROUPS.find(args).populate('user')
            if (users) return this.filter.groups.showUsers(users)

        } catch (err) {
            return this.errorHandler(err)
        }
    }

    async showAll(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('Athentication Faild')

            const { GROUPS } = this.model
            const groups = await GROUPS.find({})
            if (groups) return this.filter.groups.showAll(groups)

        } catch (err) {
            return this.errorHandler(err)
        }
    }
}

module.exports = new Groups