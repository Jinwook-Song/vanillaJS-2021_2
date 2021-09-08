const loginForm = document.querySelector("#login_form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#user_name");

const USERNAME_KEY = "user";
const savedUserName = localStorage.getItem(USERNAME_KEY);

function paintGreetings() {
  const userName = localStorage.getItem(USERNAME_KEY);
  greeting.hidden = false;
  greeting.innerHTML = `Hello ${userName} 🎉`;
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.hidden = true;
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
  loginInput.value = "";
}

function init() {
  if (savedUserName) {
    loginForm.hidden = true;
    paintGreetings();
  } else {
    greeting.hidden = true;
    loginForm.hidden = false;
    loginForm.addEventListener("submit", onLoginSubmit);
  }
}

init();
