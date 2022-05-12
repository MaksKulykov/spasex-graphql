const resolvers = {

    Query: {
        // returns an array of Missions that will be used to populate the mission`s page grid of our web client
        missions: (_, __, {dataSources}) => {
            return dataSources.spacexAPI.getMissions();
        },
        // returns info about company for main page of our web client
        company: (_, __, {dataSources}) => {
            return dataSources.spacexAPI.getCompanyInfo();
        },
        // returns info about the latest launch
        launchLatest: (_, __, {dataSources}) => {
            return dataSources.spacexAPI.getLaunchLatest();
        },
    }

};

module.exports = resolvers;
