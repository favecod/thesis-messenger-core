const Controller = require(`${config.path.controllers}`)
const Body = require(`${config.path.helpers}/Body`)
const _ = require('lodash')

class Groups extends Controller {
    async add(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('احراز هویت تایید نشد')

            const { GROUPS } = this.model
            let body = Body.extract(args)
            
            const group = await GROUPS.create(body)

            if (group) return this.filter.groups.show(group)

        } catch (err) {
            return this.errorHandler(err)
        }
    }

    async delete(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('احراز هویت تایید نشد')

            const { GROUPS, USERS_GROUPS } = this.model
            const group = await GROUPS.findByIdAndDelete(args.id)
            await USERS_GROUPS.deleteMany({ groupId: args.id })
            if (group) return this.filter.groups.show(group)

        } catch (err) {
            return this.errorHandler(err)
        }
    }

    async join(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('احراز هویت تایید نشد')

            const { USERS_GROUPS, MESSAGES, USERS } = this.model
            const res = await USERS_GROUPS.findOne(args)
            if (res) return this.errorHandler('شما قبلا وارد این گروه شده اید')

            const user_group = await USERS_GROUPS.create(args)

            if(user_group) {
                let result = await USERS_GROUPS.findOne(args).populate('user').populate('group')
                const user = await USERS.findById(args.userId)
                await MESSAGES.create({
                    ...args,
                    text: user.fullname,
                    attached: 'join'
                })
                if (result) return this.filter.groups.usersGroups(result)
            }

        } catch (err) {
            return this.errorHandler(err)
        }
    }

    async leave(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('احراز هویت تایید نشد')

            const { USERS_GROUPS, MESSAGES, USERS } = this.model
            const res = await USERS_GROUPS.findOneAndDelete(args).populate('user').populate('group')
            if (!res) return this.errorHandler('شما قبلا وارد این گروه نشده اید')

            const user = await USERS.findById(args.userId)
            await MESSAGES.create({
                ...args,
                text: user.fullname,
                attached: 'leave'
            })

            return this.filter.groups.usersGroups(res)

        } catch (err) {
            return this.errorHandler(err)
        }
    }

    async showUsers(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('احراز هویت تایید نشد')

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
                return this.errorHandler('احراز هویت تایید نشد')

            const { GROUPS } = this.model
            const groups = await GROUPS.find({})
            if (groups) return this.filter.groups.showAll(groups)

        } catch (err) {
            return this.errorHandler(err)
        }
    }
    async showGroupsForUser(args, context) {
        try {
            if (!this.verifyToken(context.req.headers.token))
                return this.errorHandler('احراز هویت تایید نشد')

            const { USERS_GROUPS, GROUPS } = this.model
            let joined = await USERS_GROUPS.find(args).populate('group')
            let notJoined = await GROUPS.find()
            for(let i in notJoined) {
                for (let j in joined) {
                    if (notJoined[i]._id.toString() == joined[j].groupId.toString()) {
                        notJoined.splice(i,1)
                    }
                }
            }
            for(let j in joined) {
                joined[j] = joined[j].group[0]
            }
            return this.filter.groups.showGroupsForUser({joined, notJoined})

        } catch (err) {
            return this.errorHandler(err)
        }
    }
}

module.exports = new Groups