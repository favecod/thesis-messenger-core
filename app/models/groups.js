const mongoose = require('mongoose')
const Schema = mongoose.Schema
const types = Schema(
    {
        name: {
            type: String,
            required: true
        },
        groupname: {
            type: String,
            required: false,
            unique: true,
            lowercase: true
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

module.exports = mongoose.model('groups', types)
