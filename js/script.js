// Dark Mode Toggle
const darkModeBtn = document.getElementById("darkModeBtn");
const body = document.body;
const header = document.querySelector("header");
const projects = document.querySelectorAll(".project");
const navLinks = document.querySelectorAll("nav ul li a");

// CHECK LOCAL STORAGE FOR DARK MODE PREFERENCE ON PAGE LOAD
if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode();
}

// Function to enable dark mode and save preference
function enableDarkMode() {
    body.classList.add("dark-mode");
    header.classList.add("dark-mode");
    projects.forEach(project => project.classList.add("dark-mode"));
    navLinks.forEach(link => link.classList.add("dark-mode"));
    localStorage.setItem("darkMode", "enabled"); // SAVE PREFERENCE
}

// Function to disable dark mode and save preference
function disableDarkMode() {
    body.classList.remove("dark-mode");
    header.classList.remove("dark-mode");
    projects.forEach(project => project.classList.remove("dark-mode"));
    navLinks.forEach(link => link.classList.remove("dark-mode"));
    localStorage.setItem("darkMode", "disabled"); // SAVE PREFERENCE
}

// Toggle dark mode on button click
darkModeBtn.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
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
    this.style.opacity = "1"; 
  });
});
