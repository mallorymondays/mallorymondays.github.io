const apiURL =
  "http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=84297c2a0a0b88e4f791efca7bb46439&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);

    document.getElementById("place").innerHTML = weatherInfo.name;
    document.getElementById("currentTemp").innerHTML =  Math.round (weatherInfo.main.temp);
    document.getElementById("windSpeed").innerHTML =  Math.round (weatherInfo.wind.speed);
    document.getElementById("description").innerHTML = weatherInfo.weather[0].description;
    document.getElementById("humidity").innerHTML = weatherInfo.main.humidity;

    const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);

    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);

    document.getElementById("weather_icon").src = icon_path;
  });
