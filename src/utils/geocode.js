const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoidm11c3RhZmEiLCJhIjoiY2t6cDMwZnpwMDZ2bDJ3bzIzeHBrczFwcyJ9.zrgMTiHcmO7ySkSKlD-r-g&limit=1'

    console.log(url)
    request({ url, json: true }, (error, { body }) => {
        console.log(error)
        console.log(body)
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if ((body.features).length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode