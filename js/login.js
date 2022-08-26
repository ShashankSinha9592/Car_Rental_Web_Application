let userData = JSON.parse(localStorage.getItem("userData")) || [];

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  if (check(email, password)) {
    window.location.href = "./index.html";
  } else {
    alert("Invalid Credentials");
  }
});

function check(email, pass) {
  for (let i of userData) {
    if (i.email == email && i.password == pass) {
      localStorage.setItem("userName", i.name);
      return true;
    }
  }
  return false;
}
