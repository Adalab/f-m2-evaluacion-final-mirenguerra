"use strict";

const buttonEl = document.querySelector(".search-btn");
const myFavouriteShows = [];
const favouriteShowEl = {
  Title: "",
  Preview: ""
};

function getShow() {
  let inputEl = document.querySelector(".search-input");
  fetch(`http://api.tvmaze.com/search/shows?q=${inputEl.value}`)
    .then(showResponse => showResponse.json())
    .then(showData => {
      document.body.innerHTML += `<ul class="list"></ul>`;
      const listEl = document.querySelector(".list");
      for (const item of showData) {
        const showTitle = item.show.name;
        if (item.show.image) {
          const showPhoto = item.show.image.medium;
          listEl.innerHTML += `<li class='element'><h2>${showTitle}</h2><img src="${showPhoto}"/></li>`;
        } else {
          listEl.innerHTML += `<li class='element'><h2>${showTitle}</h2><img src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV"/></li>`;
        }
        const elementEl = document.querySelectorAll(".element");
        for (let j = 0; j < elementEl.length; j++) {
          elementEl[j].addEventListener("click", addToMyFavourites);
        }
      }
    });
}

buttonEl.addEventListener("click", getShow);

// Crear array vacía para meter favoritos
// Crear objeto vacío con propiedades Title y Preview. Los objetos se acumularán dentro del array
// Poner listener en el li de cada serie para escuchar su click

function addToMyFavourites(event) {
  event.currentTarget.classList.add("favouriteShows");
}
// Cuando escuchemos el click·
// guardar esa serie en el objeto
// guardar el objeto en el array
// añadir la clase que cambia de color
