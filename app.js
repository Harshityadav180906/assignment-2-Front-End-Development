const form = document.querySelector(".search-form");
const details = document.querySelector(".weather_template");
const hourWeatherTemplate = document.querySelector(".hourWeatherTemplate");
const dailyWeatherTemplate = document.querySelector(".dailyWeatherTemplate");

function updateUI(data) {
    const { cityDetails, weatherData, hourweatherData, dailyWeatherData } = data;

    // Show the card
    details.classList.remove("d-none");

    // Current Weather
    details.innerHTML = `
        <img class="time_image" src="${weatherData.IsDayTime ? "day.svg" : "night.svg"}">
        <h2 class="current_weather">Current Weather</h2>
        <h1 class="english_name">📍 ${cityDetails.EnglishName}</h1>
        <div class="current_weather_flex">
            <img class="weather_icon" src="icons/${weatherData.WeatherIcon}.svg">
            <div style="display:flex">
                <span class="temperature_in_degree">${weatherData.Temperature.Metric.Value}</span>
                <span class="degree_unit">&deg;C</span>
            </div>
        </div>
        <div class="weather_text" style="font-size:1.2rem; margin-bottom:10px">${weatherData.WeatherText}</div>
        <div class="rain">Precipitation: ${weatherData.PrecipitationType || "None"}</div>
    `;

    // Hourly Weather
    hourWeatherTemplate.innerHTML = `
        <h2 style="margin: 20px 0 10px">Hourly Forecast</h2>
        <div class="hour_weather_template"> 
            ${hourweatherData.map(hour => `
                <div>
                    <h4>${new Date(hour.DateTime).getHours()}:00</h4>
                    <img src="icons/${hour.WeatherIcon}.svg" width="50">
                    <p><strong>${Math.round((hour.Temperature.Value - 32) * 5/9)}&deg;C</strong></p>
                    <p style="font-size:0.8rem">${hour.IconPhrase}</p>
                </div>
            `).join('')}
        </div>
    `;

    // Daily Weather
    dailyWeatherTemplate.innerHTML = `
        <h2 style="margin: 20px 0 10px">5-Day Forecast</h2>
        <div class="dailyWeather_Template">
            <table>
                <tr>
                    <th>Date</th><th>Day</th><th>Night</th><th>Max</th><th>Min</th>
                </tr>
                ${dailyWeatherData.DailyForecasts.map(day => `
                <tr>
                    <td>${new Date(day.Date).toLocaleDateString(undefined, {month:'short', day:'numeric'})}</td>
                    <td>${day.Day.IconPhrase}</td>
                    <td>${day.Night.IconPhrase}</td>
                    <td>${Math.round((day.Temperature.Maximum.Value - 32) * 5/9)}&deg;C</td>
                    <td>${Math.round((day.Temperature.Minimum.Value - 32) * 5/9)}&deg;C</td>
                </tr>
                `).join('')}
            </table>
        </div>
    `;
}

async function getWeather(city) {
    const cityDetails = await getLocationDetails(city);
    const weatherData = await getWeatherDetails(cityDetails.Key);
    const hourweatherData = await hourWeather(cityDetails.Key);
    const dailyWeatherData = await dailyWeather(cityDetails.Key);
    return { cityDetails, weatherData, hourweatherData, dailyWeatherData };
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = form.city.value.trim();
    form.reset();

    getWeather(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
});
