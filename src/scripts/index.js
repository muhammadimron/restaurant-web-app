import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';
import { truncate } from './util.js';

document.querySelector('header button').addEventListener('click', function(event){
  document.querySelector('.header__nav').classList.toggle('active');
});

document.querySelector('main').addEventListener('click', function(event){
  document.querySelector('.header__nav').classList.remove('active');
});

const resto = data.restaurants;
const content = document.querySelector('.content');
let contentResto = '';

for (let x of resto) {
  contentResto += `
    <div class="content__item" ${resto.indexOf(x) == (resto.length - 1) ? 'id="lastcontent"' : ''} tabindex="0">
      <div class="item__img">
        <img src=${x.pictureId} alt="picture food">
      </div>
      <div class="item__body">
        <h1 class="title">${x.name}</h1>
        <p class="body">${truncate(x.description, 100)}</p>
        <div class="body__footer">
          <p class="city">${x.city}</p>
          <p class="rating"><i class="fa-solid fa-star"></i>${x.rating}</p>
        </div>
      </div>
    </div>
  `;
}

content.innerHTML = contentResto;

