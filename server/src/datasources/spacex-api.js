const { RESTDataSource } = require('apollo-datasource-rest');

class SpacexAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = 'https://api.spacex.land/rest/';
    }

    getCompanyInfo() {
        return this.get('company');
    }

    getLaunchLatest() {
        return this.get('launch-latest');
    }

    getMissions() {
        return this.get('missions');
    }

}

module.exports = SpacexAPI;
