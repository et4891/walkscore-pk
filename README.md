## Install

```
$ npm i walkscore-pk -S
```

## To Start
first create a file with the script below e.g. `walkscore.js`

## Usage
```javascript
const walkscore = require('walkscore-pk');

const ws = new walkscore();

// set the attributes needed
ws.apiAddress = '1119-8th-Avenue-Seattle-WA-98101';  // for more accuracy
ws.apiTransit = true;  // default true
ws.apiBike = true;  // default true
ws.apiLat = '47.6085';  // required
ws.apiLon = '-122.3295';  // required
ws.apiWsapikey = 'this-is-your-walkscore-key';  // required

// RESULT
ws.getScores() // this would get you the result in promise pending

// you can do something like this
async function getS (){
    const s = await ws.getScores();
}

getS();  // this will give you the result
 ```

## Sample Success Return
```json
{
    status: 1,
    walkscore: 99,
    description: "Walker's Paradise",
    updated: "2018-11-09 18:29:55.581614",
    logo_url: "https://cdn.walk.sc/images/api-logo.png",
    more_info_icon: "https://cdn.walk.sc/images/api-more-info.gif",
    more_info_link: "https://www.redfin.com/how-walk-score-works",
    ws_link: "https://www.walkscore.com/score/1119.dash.8th.dash.Avenue.dash.Seattle.dash.WA.dash.98101/lat=47.6085/lng=-122.3295/?utm_source=registered.domain &utm_medium=ws_api&utm_campaign=ws_api",
    help_link: "https://www.redfin.com/how-walk-score-works",
    snapped_lat: 47.6085,
    snapped_lon: -122.3295,
    transit: {
        score: 100,
        description: "Rider's Paradise",
        summary: "128 nearby routes: 115 bus, 6 rail, 7 other"
    },
    bike: {
        score: 72,
        description: "Very Bikeable"
    }
}
```
