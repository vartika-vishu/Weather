const apiKey = "aca40c6396194577e981cc2d8ef71c2c";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const weather = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <h3>${data.main.temp}°C</h3>
        <p>${data.weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
      `;
      document.getElementById("weatherResult").innerHTML = weather;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
    });
}
