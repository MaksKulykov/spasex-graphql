const resolvers = {

    Query: {
        // returns an array of Missions that will be used to populate the homepage grid of our web client
        missions: (_, __, {dataSources}) => {
            return dataSources.spacexAPI.getMissions();
        }
    }

};

module.exports = resolvers;
