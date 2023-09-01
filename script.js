const hoverBox = document.getElementById("hover-box");

hoverBox.addEventListener("mouseenter", () => {
  hoverBox.style.backgroundColor = "lightblue";
});

hoverBox.addEventListener("mouseleave", () => {
  hoverBox.style.backgroundColor = "lightgray";
});