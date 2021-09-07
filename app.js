const title = document.getElementById("title");

title.innerHTML = "got you";

function handleTitleMousedown() {
  title.style.color = "blue";
}
function handleTitleMouseUp() {
  title.style.color = "red";
}
function handleTitleClick() {
  title.classList.toggle("clicked");
}

function handleWindowCopy() {
  alert("copied!");
}

// title.addEventListener("mouseenter", handleTitleMousedown);
// title.addEventListener("mouseleave", handleTitleMouseUp);
title.addEventListener("click", handleTitleClick);

window.addEventListener("copy", handleWindowCopy);
