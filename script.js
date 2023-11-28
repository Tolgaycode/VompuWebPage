document.addEventListener("DOMContentLoaded", function () {
  const background = document.querySelector(".background-image");

  window.addEventListener("scroll", () => {
    const scrollValue = window.scrollY;
    background.style.top = -scrollValue * 0.3 + "px";
  });
});

const hamburgerMenu = document.querySelector(".hamburgerMenu");
const closeButton = document.querySelector(".closeButton");
const sidebar = document.querySelector(".sidebar");

hamburgerMenu.addEventListener("click", function () {
  sidebar.classList.remove("invisible");
  sidebar.classList.add("visible");
});

closeButton.addEventListener("click", function () {
  sidebar.classList.remove("visible");
  sidebar.classList.add("invisible");
});
