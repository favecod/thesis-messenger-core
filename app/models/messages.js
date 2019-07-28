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
        text: {
            type: String,
            required: true
        },
        attached: {
            type: String,
            default: null,
        },
        active: {
            type: Boolean,
            default: true
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

module.exports = mongoose.model('messages', types)
