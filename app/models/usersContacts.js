const mongoose = require('mongoose')
const Schema = mongoose.Schema
const types = Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'users',
            required: true
        },
        friendId: {
            type: Schema.Types.ObjectId,
            ref: 'users',
            required: true
        },
        accept: {
            type: Boolean,
            default: true
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

module.exports = mongoose.model('users_contacts', types)
