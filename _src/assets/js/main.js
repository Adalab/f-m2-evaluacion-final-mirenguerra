"use strict";

const inputEl = document.querySelector(".search-input");
const buttonEl = document.querySelector(".search-btn");

// buttonEl.addEventListener("click", getSeries);

function getShow() {
  fetch("http://api.tvmaze.com/shows")
    .then(showResponse => showResponse.json())
    .then(showData => {
        document.body.innerHTML += `<ul class="list"></ul>`;
        const listEl = document.querySelector('.list');
      for (const show of showData) {
        listEl.innerHTML += `<li class='element'>${show.name}</li>`
      }
    });
}

getShow();
