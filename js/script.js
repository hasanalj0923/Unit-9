// Dark Mode Toggle
const darkModeBtn = document.getElementById("darkModeBtn");
const body = document.body;
const header = document.querySelector("header");
const projects = document.querySelectorAll(".project");
const navLinks = document.querySelectorAll("nav ul li a");

darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    projects.forEach(project => project.classList.toggle("dark-mode"));
    navLinks.forEach(link => link.classList.toggle("dark-mode"));
});

// Scroll to Top Button
let mybutton = document.getElementById("myBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Example of JavaScript interactivity triggered by an event (hovering over an image)
document.querySelectorAll('.project img').forEach(item => {
  item.addEventListener('mouseover', function() {
    this.style.opacity = "0.7"; // On hover, reduce opacity
  });
  item.addEventListener('mouseout', function() {
    this.style.opacity = "1"; // On mouse out, restore opacity
  });
});
