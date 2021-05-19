"use strict";

const url = "https://api.github.com/users/";
const btn = document.querySelector(".js-search");

function searchUser() {
  const inputValue = document.querySelector(".js-input").value;
  fetch(url + inputValue)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-userName").innerHTML = data.name;
      document.querySelector("img").src = data.avatar_url;
      document.querySelector(".repositoryNumber").innerHTML = data.public_repos;
    });
}

btn.addEventListener("click", searchUser);
