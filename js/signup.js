let userData = JSON.parse(localStorage.getItem("userData")) || [];

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let date = document.querySelector("#date").value;
  let password = document.querySelector("#password").value;

  let objData = {
    name,
    email,
    date,
    password,
  };
  if (!check(email)) {
    userData.push(objData);
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = "./login.html";
  } else {
    alert("Email already exists");
  }
});

function check(data) {
  for (let i of userData) {
    if (i.email == data) {
      return true;
    }
  }
  return false;
}
