
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
  "//api.openweathermap.org/data/2.5/forecast?q=mesa,az,US&appid=84297c2a0a0b88e4f791efca7bb46439&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    

    let mylist = weatherInfo.list;
    let forecastDayNumber = todayDayNumber;


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
  "//api.openweathermap.org/data/2.5/onecall?lat=33.438150&lon=-111.687160&exclude=hourly,daily&appid=84297c2a0a0b88e4f791efca7bb46439&units=imperial";
fetch(currentapiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
   console.log (weatherInfo);

    document.getElementById("currentTemp").innerHTML = Math.round(
      weatherInfo.current.temp
    );
        document.getElementById("description").innerHTML =
      weatherInfo.current.weather[0].description;
    document.getElementById("humidity").innerHTML = weatherInfo.current.humidity;

   
  });


 
