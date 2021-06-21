// Change text when the button is clicked
let mainButton = document.getElementById("mainButton");
mainButton.addEventListener("click", (event) => {
  let newText = "Success!";
  event.target.innerHTML = newText;
});
