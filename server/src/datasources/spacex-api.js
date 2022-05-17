const { RESTDataSource } = require('apollo-datasource-rest');

class SpacexAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = 'https://api.spacex.land/rest/';
    }

    getCompanyInfo() {
        return this.get('company');
    }

    getShips() {
        return this.get('ships');
    }

    getMissions() {
        return this.get('missions');
    }

}

module.exports = SpacexAPI;
