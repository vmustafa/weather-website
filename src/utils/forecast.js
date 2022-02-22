const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3d25797e4358430d15ce0fb2e2e94ad8&query=' + latitude + ',' + longitude

    console.log(url)
    request({ url, json: true }, (error, { body }) => {
        console.log(error)
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body)
            callback(undefined, 'The current weather is ' + body.current.weather_descriptions[0] + '. Temperature is ' + body.current.temperature + ' degrees centigrade but feels like ' + body.current.feelslike + 'degC. Chance of rain being ' + body.current.precip + '%.')
        }
    })
}

module.exports = forecast