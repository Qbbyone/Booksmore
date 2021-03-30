let menuToggle = document.querySelector(".menu-toggle");
let navLinks = document.querySelector(".nav-links");
let footer = document.querySelector(".main-footer");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
  footer.classList.toggle("active");
});
