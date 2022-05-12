const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        "Get a company info"
        company: Company
        launchLatest: LaunchLatest
        "Get missions array for homepage grid"
        missions: [Mission!]!
        "Fetch a specific mission, provided a mission's ID"
        mission(id: ID!): Mission
    }
    
    type Company {
        "The chief executive officer"
        ceo: String
        "The chief operating officer"
        coo: String
        "The chief technology officer"
        cto: String
    }
    
    type LaunchLatest {
        #ships: [Ship]
        launch_year: String
    }
    
#    type Ship {
#        id: ID!
#        image: String
#    }
    
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
