const todayDayNumber = today.getDay();

const myweekday = new Array(7);
myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";

const apiURL =
  "//api.openweathermap.org/data/2.5/forecast?q=Bear Lake,ID,US&appid=84297c2a0a0b88e4f791efca7bb46439&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);

    let mylist = weatherInfo.list;
    let forecastDayNumber = todayDayNumber;
console.log (mylist);

    for (i = 0; i < mylist.length; i++) {
      let time = mylist[i].dt_txt;
      if (time.includes("21:00:00"))
      {
        forecastDayNumber += 1;
      if (forecastDayNumber === 7) {
        forecastDayNumber = 0;
      }
        let theDayname = document.createElement("h5");
        theDayname.textContent = myweekday[forecastDayNumber];

        let theTemp = document.createElement("p");
        theTemp.textContent = Math.round (mylist[i].main.temp) + "\xB0";

        let iconcode = mylist[i].weather[0].icon;
        let iconpath = "//openweathermap.org/img/w/" + iconcode + ".png";
        let theIcon= document.createElement("img");
        theIcon.src = iconpath;

        let theDay = document.createElement("div");
        theDay.appendChild(theDayname);
        theDay.appendChild(theTemp);
        theDay.appendChild(theIcon);

        

        document.getElementById("weatherforecast").appendChild(theDay);

      } // end if
      
    } // end for
  }); // end then

const currentapiURL =
  "//api.openweathermap.org/data/2.5/weather?id=5585000&APPID=84297c2a0a0b88e4f791efca7bb46439&units=imperial";
fetch(currentapiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);

    document.getElementById("place").innerHTML = weatherInfo.name;
    document.getElementById("currentTemp").innerHTML = Math.round(
      weatherInfo.main.temp
    );
    document.getElementById("windSpeed").innerHTML = Math.round(
      weatherInfo.wind.speed
    );
    document.getElementById("description").innerHTML =
      weatherInfo.weather[0].description;
    document.getElementById("humidity").innerHTML = weatherInfo.main.humidity;

    let currentWindSpeed = weatherInfo.wind.speed;
    let currentTemperature = weatherInfo.main.temp;

    let windChill =
      35.74 +
      0.6215 * currentTemperature -
      35.75 * Math.pow(currentWindSpeed, 0.16) +
      0.4275 * currentTemperature * Math.pow(currentWindSpeed, 0.16);

    windChill = Math.round(windChill);

    if (currentTemperature <= 50 && currentWindSpeed > 3) {
      document.getElementById("chill").textContent =
        "Wind Chill: " + windChill + "°";
    } else {
      document.getElementById("chill").textContent = "No Wind Chill Today.";
    }
  });



