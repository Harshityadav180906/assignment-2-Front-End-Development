const options = {
  method: 'GET',
  headers: {Authorization: 'Bearer zpka_6f7c93502a884d95abd8823a6db3d415_5a0c3057'
  }
};
async function getWeatherDetails(locationKey) {
    const response = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`, options);
    const weatherConditions = await response.json();
    return weatherConditions[0]; 
}
async function getLocationDetails(cityName) {
    const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?q=${cityName}`, options);
    const locationData = await response.json();
    return locationData[0];
}
async function hourWeather(locationKey){
  const response = await fetch(`https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}`, options);
  const weatherConditionforhours = await response.json();
  return weatherConditionforhours;
}
async function dailyWeather(locationKey){
  const response = await fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`, options);
    const dailyWeather = await response.json();
    return dailyWeather;
}