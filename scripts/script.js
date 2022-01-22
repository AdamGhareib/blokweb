// JavaScript Document

var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  	var deNav = event.target.parentNode;

  	deNav.classList.toggle("toonMenu");
}
