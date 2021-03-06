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
  "//api.openweathermap.org/data/2.5/forecast?q=Preston,ID,US&appid=84297c2a0a0b88e4f791efca7bb46439&units=imperial";

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
        theIcon.alt = mylist[i].weather[0].description;

        let theDay = document.createElement("div");
        theDay.appendChild(theDayname);
        theDay.appendChild(theTemp);
        theDay.appendChild(theIcon);

        

        document.getElementById("weatherforecast").appendChild(theDay);

      } 
      
    } 
  }); 

//weather summary

const currentapiURL =
  "//api.openweathermap.org/data/2.5/weather?id=5604473&APPID=84297c2a0a0b88e4f791efca7bb46439&units=imperial";
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
        "Wind Chill: " + windChill + "??";
    } else {
      document.getElementById("chill").textContent = "No Wind Chill Today.";
    }
  });

  fetch(requestURL)
  .then(function (response) {
      return response.json();
  })
  .then(function (jsonObject) {
      

      const towns = jsonObject["towns"];

      const needTowns = towns.filter(town => town.name == "Preston" || town.name == "Soda Springs" || town.name == "Fish Haven");
      

      const eventpreston = document.querySelector("#eventpreston");
      const preston = "Preston";

      needTowns.forEach(town => {

        if (town.name == preston) {
          for (let i = 0; i < town.events.length; i++) {
            let ep = document.createElement("p");

            ep.textContent = town.events[i];
            eventpreston.appendChild(ep);
          }
        }

        
      });
  });