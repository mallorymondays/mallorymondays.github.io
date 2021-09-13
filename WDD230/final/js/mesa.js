const todayDay = today.getDay();
const todayDate = new Date();
const myweekday = new Array(7);
myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";

const apiURL =
  "//api.openweathermap.org/data/2.5/onecall?lat=33.438150&lon=-111.687160&exclude=hourly,minutely&appid=84297c2a0a0b88e4f791efca7bb46439&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
   

    let mylist = weatherInfo.daily;
    let forecastDay = todayDay;

    for (i = 0; i < 3; i++) {
      forecastDay += 1;
      if (forecastDay === 7) {
        forecastDay = 0;
      }
      let theDayname = document.createElement("h5");
      theDayname.textContent = myweekday[forecastDay];

      let theTemp = document.createElement("p");
      theTemp.textContent = Math.round(weatherInfo.current.temp)
      +"\xB0";

      let iconcode = mylist[i].weather[0].icon;
      let iconpath = "//openweathermap.org/img/w/" + iconcode + ".png";
      let theIcon = document.createElement("img");
      theIcon.src = iconpath;
      theIcon.alt = mylist[i].weather[0].description;

      let theDay = document.createElement("div");
      theDay.appendChild(theDayname);
      theDay.appendChild(theTemp);
      theDay.appendChild(theIcon);

      document.getElementById("weatherforecast").appendChild(theDay);
    }
  });

//weather summary

const currentapiURL =
  "//api.openweathermap.org/data/2.5/onecall?lat=33.438150&lon=-111.687160&exclude=hourly,daily&appid=84297c2a0a0b88e4f791efca7bb46439&units=imperial";
fetch(currentapiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    document.getElementById("currentTemp").innerHTML = Math.round(
      weatherInfo.current.temp
    );
    document.getElementById("description").innerHTML =
      weatherInfo.current.weather[0].description;
    document.getElementById("humidity").innerHTML =
      weatherInfo.current.humidity;
  });
