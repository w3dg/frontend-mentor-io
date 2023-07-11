const burger = document.querySelector(".burger");
const navigation_box = document.querySelector(".navigation-links");

const navLinks = document.querySelectorAll(".nav-items li");

burger.addEventListener("click", () => {
  navigation_box.classList.toggle("toggle-nav");
});
