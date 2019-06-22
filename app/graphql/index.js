const apiv1 = require('./v1')

const routes = (app) => {
    apiv1.applyMiddleware({ app, path: '/api/v1/graphql' })
}

module.exports = routes