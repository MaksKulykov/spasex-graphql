const { RESTDataSource } = require('apollo-datasource-rest');

class SpacexAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = 'https://api.spacex.land/rest/';
    }

    getMissions() {
        return this.get('missions');
    }

}

module.exports = SpacexAPI;
