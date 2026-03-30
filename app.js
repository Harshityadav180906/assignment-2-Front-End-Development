const form = document.querySelector("form");
const details = document.querySelector(".weather_template");
const iconImg = document.querySelector(".weather_icon");
const HouriconImg = document.querySelector(".hour_weather_icon");
const timeImg = document.querySelector(".time_image");
const hourWeatherTemplate = document.querySelector(".hourWeatherTemplate");
const dailyWeatherTemplate = document.querySelector(".dailyWeatherTemplate")

function updateUI(data) {
  const cityDetails = data.cityDetails;
  const weatherData = data.weatherData;
  const hourweatherData = data.hourweatherData;
  const dailyWeatherData = data.dailyWeatherData;
  details.innerHTML = `
        <h2 class = "current_weather">Current Weather</h2>
        <hr class="horizontal_line_1">
        <h1 class="english_name">📍${cityDetails.EnglishName}</h1>
        <div class="weather_text">${weatherData.WeatherText}</div>
        <div class="temperature_in_degree">${weatherData.Temperature.Metric.Value}</div>
        <div class="degree">&deg;</div>
        <div class="degree_c">c</div>
        <div class="rain">Precipitation: ${weatherData.PrecipitationType}</div>
        <img class="weather_icon" src="icons/${weatherData.WeatherIcon}.svg" alt="Weather Icon">
        <img class="time_image" src="${weatherData.IsDayTime ? "day.svg" : "night.svg"}" alt="Time Image">
    `;
  hourWeatherTemplate.innerHTML = `
    <h2 class = "hour_weather_heading">Hour Weather</h2>
        <div class = "hour_weather_template"> 
            <div class = "time1">
                    <h4 class = "hour_english_name"> ${hourweatherData[0].DateTime}</h4>
                    <img class="hour_weather_icon" src="icons/${hourweatherData[0].WeatherIcon}.svg" alt="Weather Icon">
                    <h4 class = "hour_rain">Precipitaion: ${hourweatherData[0].HasPrecipitation}</h4>
                    <h4 class = "hour_weather_text">${hourweatherData[0].IconPhrase}</h4>
                    <h4 class = "hour_weather_text">${Math.round((hourweatherData[0].Temperature.Value - 32 )* 5/9 * 10 / 10)}&deg;C</h4>
                    </div>
                    <div class = "time2">
                    <h4 class = "hour_english_name"> ${hourweatherData[1].DateTime}</h4>
                    <img class="hour_weather_icon" src="icons/${hourweatherData[1].WeatherIcon}.svg" alt="Weather Icon">
                    <h4 class = "hour_rain">Precipitaion:  ${hourweatherData[1].HasPrecipitation}</h4>
                    <h4 class = "hour_weather_text">${hourweatherData[1].IconPhrase}</h4>
                    <h4 class = "hour_weather_text">${Math.round((hourweatherData[1].Temperature.Value - 32 )* 5/9 * 10 / 10)}&deg;C</h4>
                    </div>
                    <div class = "time3">
                    <h4 class = "hour_english_name"> ${hourweatherData[2].DateTime}</h4>
                    <img class="hour_weather_icon" src="icons/${hourweatherData[2].WeatherIcon}.svg" alt="Weather Icon">
                    <h4 class = "hour_rain">Precipitaion:  ${hourweatherData[2].HasPrecipitation}</h4>
                    <h4 class = "hour_weather_text">${hourweatherData[2].IconPhrase}</h4>
                    <h4 class = "hour_weather_text">${Math.round((hourweatherData[2].Temperature.Value - 32 )* 5/9 * 10 / 10)}&deg;C</h4>
                    </div>
                    <div class = "time4">
                    <h4 class = "hour_english_name"> ${hourweatherData[3].DateTime}</h4>
                    <img class="hour_weather_icon" src="icons/${hourweatherData[3].WeatherIcon}.svg" alt="Weather Icon">
                    <h4 class = "hour_rain">Precipitaion:  ${hourweatherData[3].HasPrecipitation}</h4>
                    <h4 class = "hour_weather_text">${hourweatherData[3].IconPhrase}</h4>
                    <h4 class = "hour_weather_text">${Math.round((hourweatherData[3].Temperature.Value - 32 )* 5/9 * 10 / 10)}&deg;C</h4>
                    </div>
                    <div class = "time5">
                    <h4 class = "hour_english_name"> ${hourweatherData[4].DateTime}</h4>
                    <img class="hour_weather_icon" src="icons/${hourweatherData[4].WeatherIcon}.svg" alt="Weather Icon">
                    <h4 class = "hour_rain">Precipitaion:  ${hourweatherData[4].HasPrecipitation}</h4>
                    <h4 class = "hour_weather_text">${hourweatherData[4].IconPhrase}</h4>
                    <h4 class = "hour_weather_text">${Math.round((hourweatherData[4].Temperature.Value - 32 )* 5/9 * 10 / 10)}&deg;C</h4>
                    </div>
                    <div class = "time6">
                    <h4 class = "hour_english_name"> ${hourweatherData[5].DateTime}</h4>
                    <img class="hour_weather_icon" src="icons/${hourweatherData[5].WeatherIcon}.svg" alt="Weather Icon">
                    <h4 class = "hour_rain">Precipitaion:  ${hourweatherData[5].HasPrecipitation}</h4>
                    <h4 class = "hour_weather_text">${hourweatherData[5].IconPhrase}</h4>
                    <h4 class = "hour_weather_text">${Math.round((hourweatherData[5].Temperature.Value - 32 )* 5/9 * 10 / 10)}&deg;C</h4>
                    </div>
                    <div class = "time7">
                    <h4 class = "hour_english_name"> ${hourweatherData[6].DateTime}</h4>
                    <img class="hour_weather_icon" src="icons/${hourweatherData[6].WeatherIcon}.svg" alt="Weather Icon">
                    <h4 class = "hour_rain">Precipitaion:  ${hourweatherData[6].HasPrecipitation}</h4>
                    <h4 class = "hour_weather_text">${hourweatherData[6].IconPhrase}</h4>
                    <h4 class = "hour_weather_text">${Math.round((hourweatherData[6].Temperature.Value - 32 )* 5/9 * 10 / 10)}&deg;C</h4>
                    </div>
                    <div class = "time8">
                    <h4 class = "hour_english_name"> ${hourweatherData[6].DateTime}</h4>
                    <img class="hour_weather_icon" src="icons/${hourweatherData[7].WeatherIcon}.svg" alt="Weather Icon">
                    <h4 class = "hour_rain">Precipitaion:  ${hourweatherData[7].HasPrecipitation}</h4>
                    <h4 class = "hour_weather_text">${hourweatherData[7].IconPhrase}</h4>
                    <h4 class = "hour_weather_text">${Math.round((hourweatherData[7].Temperature.Value - 32 )* 5/9 * 10 / 10)}&deg;C</h4>
                    </div>
                    <div class = "time9">
                    <h4 class = "hour_english_name"> ${hourweatherData[8].DateTime}</h4>
                    <img class="hour_weather_icon" src="icons/${hourweatherData[8].WeatherIcon}.svg" alt="Weather Icon">
                    <h4 class = "hour_rain">Precipitaion:  ${hourweatherData[8].HasPrecipitation}</h4>
                    <h4 class = "hour_weather_text">${hourweatherData[8].IconPhrase}</h4>
                    <h4 class = "hour_weather_text">${Math.round((hourweatherData[8].Temperature.Value - 32 )* 5/9 * 10 / 10)}&deg;C</h4>
                    </div>
                    <div class = "time10">
                    <h4 class = "hour_english_name"> ${hourweatherData[9].DateTime}</h4>
                    <img class="hour_weather_icon" src="icons/${hourweatherData[9].WeatherIcon}.svg" alt="Weather Icon">
                    <h4 class = "hour_rain">Precipitaion:  ${hourweatherData[9].HasPrecipitation}</h4>
                    <h4 class = "hour_weather_text">${hourweatherData[9].IconPhrase}</h4>
                    <h4 class = "hour_weather_text">${Math.round((hourweatherData[9].Temperature.Value - 32 )* 5/9 * 10 / 10)}&deg;C</h4>
                    </div>
                    <div class = "time11">
                    <h4 class = "hour_english_name"> ${hourweatherData[10].DateTime}</h4>
                    <img class="hour_weather_icon" src="icons/${hourweatherData[10].WeatherIcon}.svg" alt="Weather Icon">
                    <h4 class = "hour_rain">Precipitaion:  ${hourweatherData[10].HasPrecipitation}</h4>
                    <h4 class = "hour_weather_text">${hourweatherData[10].IconPhrase}</h4>
                    <h4 class = "hour_weather_text">${Math.round((hourweatherData[10].Temperature.Value - 32 )* 5/9 * 10 / 10)}&deg;C</h4>
                    </div>
                    <div class = "time12">
                    <h4 class = "hour_english_name"> ${hourweatherData[11].DateTime}</h4>
                    <img class="hour_weather_icon" src="icons/${hourweatherData[11].WeatherIcon}.svg" alt="Weather Icon">
                    <h4 class = "hour_rain">Precipitaion:  ${hourweatherData[11].HasPrecipitation}</h4>
                    <h4 class = "hour_weather_text">${hourweatherData[11].IconPhrase}</h4>
                    <h4 class = "hour_weather_text">${Math.round((hourweatherData[11].Temperature.Value - 32 )* 5/9 * 10 / 10)}&deg;C</h4>
                </div>
        </div>
        `;
dailyWeatherTemplate.innerHTML = `
    <h2 class="dailyWeatherData_heading">Daily Weather</h2>
    <div class="dailyWeather_Template">
        <table>
        <tr>
            <th>Sr.No</th>     
            <th>DATE</th>     
            <th>DAY</th>     
            <th>NIGHT</th> 
            <th>Precipitaion  (DAY)</th>  
            <th>Precipitaion  (NIGHT)</th>
            <th>Maximum Temperature</th>
            <th>Minimum Temperature</th>
        </tr>
        <tr>
            <td>1)</td>
            <td>${dailyWeatherData.DailyForecasts[0].Date}</td>
            <td>${dailyWeatherData.DailyForecasts[0].Day.IconPhrase}</td>
            <td>${dailyWeatherData.DailyForecasts[0].Night.IconPhrase}</td>
            <td>${dailyWeatherData.DailyForecasts[0].Day.HasPrecipitation}</td>
            <td>${dailyWeatherData.DailyForecasts[0].Night.HasPrecipitation}</td>
            <td>${Math.round((dailyWeatherData.DailyForecasts[0].Temperature.Maximum.Value - 32 )* 5/9 * 10 / 10)}&deg;C</td>
            <td>${Math.round((dailyWeatherData.DailyForecasts[0].Temperature.Minimum.Value - 32 )* 5/9 * 10 / 10)}&deg;C</td>
        </tr>
        <tr>
            <td>2)</td>
            <td>${dailyWeatherData.DailyForecasts[1].Date}</td>
            <td>${dailyWeatherData.DailyForecasts[1].Day.IconPhrase}</td>
            <td>${dailyWeatherData.DailyForecasts[1].Night.IconPhrase}</td>
            <td>${dailyWeatherData.DailyForecasts[1].Day.HasPrecipitation}</td>
            <td>${dailyWeatherData.DailyForecasts[1].Night.HasPrecipitation}</td>
            <td>${Math.round((dailyWeatherData.DailyForecasts[1].Temperature.Maximum.Value - 32 )* 5/9 * 10 / 10)}&deg;C</td>
            <td>${Math.round((dailyWeatherData.DailyForecasts[1].Temperature.Minimum.Value - 32 )* 5/9 * 10 / 10)}&deg;C</td>
        <tr>
            <td>3)</td>
            <td>${dailyWeatherData.DailyForecasts[2].Date}</td>
            <td>${dailyWeatherData.DailyForecasts[2].Day.IconPhrase}</td>
            <td>${dailyWeatherData.DailyForecasts[2].Night.IconPhrase}</td>
            <td>${dailyWeatherData.DailyForecasts[2].Day.HasPrecipitation}</td>
            <td>${dailyWeatherData.DailyForecasts[2].Night.HasPrecipitation}</td>
            <td>${Math.round((dailyWeatherData.DailyForecasts[2].Temperature.Maximum.Value - 32 )* 5/9 * 10 / 10)}&deg;C</td>
            <td>${Math.round((dailyWeatherData.DailyForecasts[2].Temperature.Minimum.Value - 32 )* 5/9 * 10 / 10)}&deg;C</td>
        </tr>
        <tr>
            <td>4)</td>
            <td>${dailyWeatherData.DailyForecasts[3].Date}</td>
            <td>${dailyWeatherData.DailyForecasts[3].Day.IconPhrase}</td>
            <td>${dailyWeatherData.DailyForecasts[3].Night.IconPhrase}</</td>
            <td>${dailyWeatherData.DailyForecasts[3].Day.HasPrecipitation}</td>
            <td>${dailyWeatherData.DailyForecasts[3].Night.HasPrecipitation}</td>
            <td>${Math.round((dailyWeatherData.DailyForecasts[3].Temperature.Maximum.Value - 32 )* 5/9 * 10 / 10)}&deg;C</td>
            <td>${Math.round((dailyWeatherData.DailyForecasts[4].Temperature.Minimum.Value - 32 )* 5/9 * 10 / 10)}&deg;C</td>
        </tr>
        <tr>
            <td>5)</td>
            <td>${dailyWeatherData.DailyForecasts[4].Date}</td>
            <td>${dailyWeatherData.DailyForecasts[4].Day.IconPhrase}</td>
            <td>${dailyWeatherData.DailyForecasts[4].Night.IconPhrase}</td>
            <td>${dailyWeatherData.DailyForecasts[4].Day.HasPrecipitation}</td>
            <td>${dailyWeatherData.DailyForecasts[4].Night.HasPrecipitation}</td>
            <td>${Math.round((dailyWeatherData.DailyForecasts[4].Temperature.Maximum.Value - 32 )* 5/9 * 10 / 10)}&deg;C</td>
            <td>${Math.round((dailyWeatherData.DailyForecasts[4].Temperature.Minimum.Value - 32 )* 5/9 * 10 / 10)}&deg;C</td>
        </tr>
      </table>
    </div>
`;

  const HouriconImg = `img/icons/${hourweatherData.HouriconImg}.svg`;
  iconImg.setAttribute("src", iconImg);

  const iconSrc = `img/icons/${weatherData.WeatherIcon}.svg`;
  iconImg.setAttribute("src", iconSrc);

  let timeSrc = weatherData.IsDayTime ? "img/day.svg" : "img/night.svg";
  time.setAttribute("src", timeSrc);
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
}
async function getWeather(city) {
  const cityDetails = await getLocationDetails(city);
  const weatherData = await getWeatherDetails(cityDetails.Key);
  const hourweatherData = await hourWeather(cityDetails.Key);
  const dailyWeatherData = await dailyWeather(cityDetails.Key);
  console.log(cityDetails, weatherData, hourweatherData , dailyWeatherData);
  return { cityDetails, weatherData, hourweatherData, dailyWeatherData};
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = form.city.value.trim();
  form.reset();

  getWeather(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => console.log(err));
});
