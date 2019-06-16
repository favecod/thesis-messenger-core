const { ApolloServer, gql } = require('apollo-server-express')

const schema = gql`
  type Query {
    me: User
  }

  type User {
    username: String!
  }
`;

const resolvers = {
    Query: {
        me: () => {
            return {
                username: 'Mohammad Mahdi',
            };
        },
    },
};

const server = new ApolloServer({
    typeDefs: schema,
    resolvers
})

module.exports = server