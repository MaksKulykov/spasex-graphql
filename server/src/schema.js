const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        "Get a company info"
        company: Company
        ships: [Ship!]!
        ship(id: ID!): Ship
        "Get missions array for homepage grid"
        missions: [Mission!]!
        "Fetch a specific mission, provided a mission's ID"
        mission(id: ID!): Mission
    }
    
    type Company {
        "Number of employees"
        employees: Int
        "Founder of the company"
        founder: String
        "Company name"
        name: String
        "Description"
        summary: String
    }
    
    type Ship {
        id: ID!
        name: String
        image: String
    }
    
    "A mission is a group of Modules that teaches about a specific topic"
    type Mission {
        id: ID!
        "The mission's name"
        name: String!
        "The mission's description"
        description: String
        "Array of manufactures"
        manufactured: [String]
        "Link for mission in twitter"
        twitter: String
        "Link for mission's website'"
        website: String
        "Link for mission's page in wikipedia'"
        wikipedia: String
    }
`;

module.exports = typeDefs;
