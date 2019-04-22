"use strict";

const inputEl = document.querySelector(".search-input");
const buttonEl = document.querySelector(".search-btn");

buttonEl.addEventListener("click", getShow);

function getShow() {
  fetch(`http://api.tvmaze.com/search/shows?q=${inputEl.value}`)
    .then(showResponse => showResponse.json())
    .then(showData => {
      console.log(showData);
      document.body.innerHTML += `<ul class="list"></ul>`;
      const listEl = document.querySelector(".list");
      for (const item of showData) {
        const showTitle = item.show.name;
        const showPhoto = item.show.image.original;
        listEl.innerHTML += `<li class='element'><h2>${showTitle}</h2><img src="${showPhoto}"/></li>`;
      }
    });
}
