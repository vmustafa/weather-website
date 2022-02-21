const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3d25797e4358430d15ce0fb2e2e94ad8&query=' + latitude + ',' + longitude

    console.log(url)
    request({ url, json: true }, (error, { body }) => {
        console.log(error)
        console.log(body)
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast