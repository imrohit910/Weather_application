const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '16f6e00746msh9d310980b0cde54p157b7fjsn1385f9e4a29d',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
const getwether = (city) => {
  cityname.innerHTML = city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      temp.innerHTML = response.temp
      min_temp.innerHTML = response.min_temp
      max_temp.innerHTML = response.max_temp
      wind_speed.innerHTML = response.wind_speed
      wind_degrees.innerHTML = response.wind_degrees
      humidity.innerHTML = response.humidity
      cloud_pct.innerHTML = response.cloud_pct
      feels_like.innerHTML = response.feels_like
      const sunriseTimestamp = response.sunrise;
      const sunsetTimestamp = response.sunset;
      // Convert sunrise timestamp to Date object
      const sunriseDate = new Date(sunriseTimestamp * 1000);
      const option = {
        timeZone: "Asia/Kolkata", // Replace with the desired time zone
        // Other options can be used, such as timeZoneName, hour12, etc.
      };
      // Extract sunrise time components
      const sunriseTime = sunriseDate.toLocaleTimeString(undefined,option);
      // Convert sunset timestamp to Date object
      const sunsetDate = new Date(sunsetTimestamp * 1000);
      // Extract sunset time components
      const sunsetTime = sunsetDate.toLocaleTimeString(undefined,option);
      sunrise.innerHTML = sunriseTime
      sunset.innerHTML = sunsetTime

    })
    .catch(error => console.error(error));

}
submit.addEventListener("click", (e) => {
  e.preventDefault()
  getwether(city.value)
})
getwether("Delhi")