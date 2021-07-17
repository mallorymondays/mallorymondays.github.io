function toggleMenu() {
  document.getElementById("primNav").classList.toggle("hide");
}

function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}
const today = new Date();
const requestURL = "json/business.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const business = jsonObject["business"];
    

    for (let i = 0; i < business.length; i++) {
      if (i == 0 || i == 1 || i == 2) {
        let card = document.createElement("div");
        let info = document.createElement("section");
        let image = document.createElement("figure");

        let name = document.createElement("h2");
        let motto = document.createElement("h3");
        let website = document.createElement("a");
        let photo = document.createElement("img");

        name.textContent = business[i].name;
        motto.textContent = business[i].motto;
        website.textContent = business[i].website;
        

        photo.setAttribute("src", "images/" + business[i].photo);
        photo.setAttribute("alt", business[i].name);
        photo.setAttribute("width", "200");
        photo.setAttribute("height", "200");

        website.setAttribute("href", "https://" + business[i].website);
        website.setAttribute("target", "_blank");

        info.appendChild(name);
        info.appendChild(motto);
        info.appendChild(website);
        

        card.appendChild(info);
        image.appendChild(photo);
        card.appendChild(image);

        document.getElementById("cards").appendChild(card);
      }
    }
  });
