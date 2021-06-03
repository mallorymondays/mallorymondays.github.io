function toggleMenu (){
document.getElementById("primNav").classList.toggle("hide");
}

/* // Visited Days Ago
let now = new Date();
let lastVisit = new Date(localStorage.getItem("lastVisitTime"));
const diffTime = now - lastVisit;
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
console.log(diffDays + " days");

if (diffDays < 2) {
  if (diffDays == 1) {
    document.getElementById('lastVisited').innerHTML = "1 Day Ago";
  }
} else {
  document.getElementById('lastVisited').innerHTML = diffDays + " Days Ago";
}

localStorage.setItem("lastVisitTime", now.toISOString());
*/
