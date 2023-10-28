document.addEventListener("DOMContentLoaded", function () {
  const background = document.querySelector(".background-image");

  window.addEventListener("scroll", () => {
    const scrollValue = window.scrollY;
    background.style.top = -scrollValue * 0.3 + "px";
  });
});
