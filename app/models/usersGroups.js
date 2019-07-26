const mongoose = require('mongoose')
const Schema = mongoose.Schema
const types = Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'users',
            required: true
        },
        groupId: {
            type: Schema.Types.ObjectId,
            ref: 'groups',
            required: true
        },
        accept: {
            type: Boolean,
            default: true
        },
        active: {
            type: Boolean,
            default: false
        },
        deleted: {
            type: Boolean,
            default: false
        }       
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true
        }
    }
)

types.virtual('user', {
    ref: 'users',
    localField: 'userId',
    foreignField: '_id'
})

types.virtual('group', {
    ref: 'groups',
    localField: 'groupId',
    foreignField: '_id'
})

module.exports = mongoose.model('users_groups', types)
