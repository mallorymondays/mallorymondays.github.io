

const requestdURL = "https://mallorymondays.github.io/directory.json";

fetch(requestdURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (directoryCard) {
    const directory = directoryCard["directory"];
      
       for (let i = 0; i < directory.length; i++) {
        if (i == 0 || i == 1 || i == 2 || i == 3|| i == 4|| i == 5|| i == 6|| i == 7|| i == 8|| i == 9) {
          let card = document.createElement("div");
          let info = document.createElement("section");
          let image = document.createElement("figure");
  
          let name = document.createElement("h2");
          let website = document.createElement("p");
          let photo = document.createElement("img");
  
          name.textContent = directory[i].name;
          website.textContent = directory[i].website;
          
  
          photo.setAttribute("src", "images/" + directory[i].photo);
          photo.setAttribute("alt", directory[i].name);
          photo.setAttribute("width", "300");
          photo.setAttribute("height", "300");
  
          info.appendChild(name);
          info.appendChild(website);
          
  
          card.appendChild(info);
          image.appendChild(photo);
          card.appendChild(image);
  
          document.getElementById("directorycards").appendChild(card);
        }
      }
    });