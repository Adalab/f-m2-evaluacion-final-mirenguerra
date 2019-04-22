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
          const serie = item.show.name;
          // console.log(serie);  
        listEl.innerHTML += `<li class='element'>${serie}</li>`;
      }
    });
}

// function getShow() {
//     fetch("http://api.tvmaze.com/shows")
//       .then(showResponse => showResponse.json())
//       .then(showData => {
//           document.body.innerHTML += `<ul class="list"></ul>`;
//           const listEl = document.querySelector('.list');
//         for (const show of showData) {
//           listEl.innerHTML += `<li class='element'>${show.name}</li>`
//         }
//       });
//   }
