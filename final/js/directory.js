const requestURL = "https://mallorymondays.github.io/directory.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const directory = jsonObject["directory"];
    console.log (directory);

    for (let i = 0; i < directory.length; i++) {
      if (i == 0 || i == 1 || i == 2) {
        let card = document.createElement("div");
        let info = document.createElement("section");
        let image = document.createElement("figure");

        let name = document.createElement("h3");
        let website = document.createElement("p");
        let photo = document.createElement("img");

        name.textContent = directory[i].name;
        website.textContent = directory[i].website;
        

        photo.setAttribute("src", "images/" + directory[i].photo);
        photo.setAttribute("alt", directory[i].name);
        photo.setAttribute("width", "200");
        photo.setAttribute("height", "200");

        info.appendChild(name);
        info.appendChild(website);
        

        card.appendChild(info);
        card.appendChild(image);

        document.getElementById("gallery").appendChild(card);
      }
    }
  });