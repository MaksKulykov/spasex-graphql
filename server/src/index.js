const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const SpacexAPI = require('./datasources/spacex-api');

const server = new ApolloServer({
    typeDefs,
    dataSources: () => {
        return {
            spacexAPI: new SpacexAPI()
        };
    }
});

server.listen({port: process.env.PORT || 4000}).then(() => {
    console.log(`
        Server is running!
        Listening on port 4000
  `);
});
