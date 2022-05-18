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

    getShip(shipId) {
        return this.get(`ship/${shipId}`);
    }

    getMissions() {
        return this.get('missions');
    }

}

module.exports = SpacexAPI;
