const axios = require('axios');

class WalkScore {
    constructor(
        _api = {
            prefix: 'http://api.walkscore.com/score?format=',
            format: 'json',
            address: '',
            lat: '',
            lon: '',
            transit: 1,  // true as default
            bike: 1,  // true as default
            wsapikey: ''
        },
    ) {
        this.log = console.log.bind(console);
        this.api = _api;
    }

    set apiFormat(format) {
        this.api.format = format;
    }

    set apiAddress(address) {
        this.api.address = address;
    }

    set apiLat(lat) {
        this.api.lat = lat;
    }

    set apiLon(lon) {
        this.api.lon = lon;
    }

    set apiTransit(transitBoo) {
        this.api.transit = transitBoo;
    }

    set apiBike(bikeBoo) {
        this.api.bike = bikeBoo;
    }

    set apiWsapikey(wsapikey) {
        this.api.wsapikey = wsapikey;
    }

    get apiPath() {
        return `${this.api.prefix}${this.api.format}&address=${this.api.address}&lat=${this.api.lat}&lon=${this.api.lon}&=transit${this.api.transit}&=bike&${this.api.bike}&wsapikey=${this.api.wsapikey}`
    }

    get getScores() {
        return async () => {
            try {
                const result = await axios({
                    method: 'get',
                    url: this.apiPath
                });
                return result.data;
            } catch (e) {
                return e;
            }
        };
    }
}

module.exports = WalkScore;
