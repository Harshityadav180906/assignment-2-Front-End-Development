const API_KEY = 'zpka_86522a9ed1534a2182cef67cbc6ff180_6bd3e48a'; 

async function getLocationDetails(cityName) {
    const url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${cityName}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found');
    const locationData = await response.json();
    return locationData[0];
}

async function getWeatherDetails(locationKey) {
    const url = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`;
    const response = await fetch(url);
    const weatherConditions = await response.json();
    return weatherConditions[0];
}

async function hourWeather(locationKey) {
    const url = `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?apikey=${API_KEY}`;
    const response = await fetch(url);
    return await response.json();
}

async function dailyWeather(locationKey) {
    const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`;
    const response = await fetch(url);
    return await response.json();
}
