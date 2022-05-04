const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
      "Get missions array for homepage grid"
      missions: [Mission!]!
      "Fetch a specific mission, provided a mission's ID"
      mission(id: ID!): Mission
    }
    "A mission is a group of Modules that teaches about a specific topic"
    type Mission {
      id: ID!
      "The mission's name"
      name: String!
    }
`;

module.exports = typeDefs;
