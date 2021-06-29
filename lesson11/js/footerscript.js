let myYear = new Date();
let myDate = myYear.getFullYear();

document.getElementById("year").textContent = myDate;
document.getElementById("lu").textContent =
  "  Last Updated: " + document.lastModified;

  
// front load//
WebFont.load({google: {families: ['Yanone Kaffeesatz']}});