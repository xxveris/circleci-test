// Change text when the button is clicked
let mainButton = document.getElementById("mainButton");
mainButton.addEventListener("click", (event) => {
  let content = document.getElementById("mainContent");
  content.innerHTML += "<h1>Success</h1>"; 
});
