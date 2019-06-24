const mongoose = require('mongoose')
const Schema = mongoose.Schema
const types = Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        fullname: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: false,
            unique: true,
            lowercase: true
        },
        birthday: {
            type: Date,
            required: false
        },
        bio: {
            type: String,
            required: false
        },
        followersCounter: {
            type: Number,
            default: 0
        },
        followingsCounter: {
            type: Number,
            default: 0
        },
        postsCounter: {
            type: Number,
            default: 0
        },
        likePostsCounter: {
            type: Number,
            default: 0
        },
        admin: {
            type: Boolean,
            default: false
        },
        private: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        },
        image: {
            type: String,
            default: null
        },
        cover: {
            type: String,
            default: null
        }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true
        }
    }
)

module.exports = mongoose.model('users', types)
