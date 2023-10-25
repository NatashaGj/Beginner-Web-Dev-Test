// Form input
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.querySelector("#submit");
const userName = document.querySelector(".userName");

function showUserInfo(e) {
  e.preventDefault();

  userName.innerHTML = nameInput.value;
  userName.className.add("userInfo");
}

form.addEventListener("submit", (e) => showUserInfo(e));

/// Change the background color of the page

const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
