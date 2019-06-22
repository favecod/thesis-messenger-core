const path = require('path')
const database = require('./database')
const jwt = require('./jwt')

module.exports = {
    database,
    jwt,
    port: process.env.PORT,
    path: {
        controllers: path.resolve('app/controllers'),
        graphql: path.resolve('app/graphql'),
        middlewares: path.resolve('app/middlewares'),
        validators: path.resolve('app/validators'),
        models: path.resolve('app/models'),
        filters: path.resolve('app/filters'),
        helpers: path.resolve('app/helpers'),
        constants: path.resolve('app/constants'),
    },
}