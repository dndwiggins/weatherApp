// API KEY 6LQSPP7ZS5F9354RNAN967JBB


async function getWeather(location) {

    location = location.replace(/\s+/g, ''); //removes spaces

    const key = '?key=6LQSPP7ZS5F9354RNAN967JBB' //exposed key lmao

    let url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'

    url = url + location + key

    try {
        const response = await fetch(url, { mode: 'cors' });
        const weatherData = await response.json(); //converts to object

        return await weatherData

    } catch (error) {
        console.log("Error")
    }


}

//no way to make this async function synchronous 

const input = document.getElementById('city-input');

input.addEventListener('blur', async function () {

    const data = await getWeather(input.value)

    setWeather(data)

});


async function setWeather(data) {

    const city = document.getElementById('city-name')

    const country = document.getElementById('country')

    const temp = document.getElementById('temp')

    const con = document.getElementById('con')

    const rain = document.getElementById('rain-metric')

    const wind = document.getElementById('wind-metric')

    const humid = document.getElementById('humid-metric')

    city.innerHTML = data.address

    temp.innerHTML = data.currentConditions.temp

    con.innerHTML = data.currentConditions.conditions

    rain.innerHTML = data.currentConditions.precip

    wind.innerHTML = data.currentConditions.windspeed

    humid.innerHTML = data.currentConditions.humidity



}


