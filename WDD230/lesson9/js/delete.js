function toggleMenu() {
  document.getElementById("primNav").classList.toggle("hide");
}

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    console.table(jsonObject);
    /* const selectThree = towns.filter(
       (towns) =>
         towns.name == "Soda Springs" ||
         towns.name == "Fish Haven" ||
         towns.name == "Preston"
     );
 */

    for (let i = 0; i < towns.length; i++) {
      if (i == 0 || i == 2 || i == 6) {
        // selectThree.forEach((towns) => {
          let card = document.createElement("section");
          let name = document.createElement("h2");
          let motto = document.createElement("h3");
          let yearFounded = document.createElement("p");
          let currentPopulation = document.createElement("p");
          let averageRainfall = document.createElement("p");
          let photo = document.createElement("img");

          name.textContent = town[i].name;
          motto.textContent = towns[i].motto;
          yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
          currentPopulation.textContent = "Population: " + towns[i].currentPopulation;
          averageRainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;

          photo.setAttribute("src", "images" + towns[i].photo);
          photo.setAttribute("alt", towns[i].name);

          card.append(name);
          card.append(motto);
          card.append(yearFounded);
          card.append(urrentPopulation);
          card.append(averageRainfall);
          card.append(photo);

          document.querySelector("div.cards").appendChild(card);
        }
      }
    }
);