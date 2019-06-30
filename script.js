import style from './style.css';

const ul = document.querySelector('.list');
const array = ['a', 'b', 'c', 'd', 'e'];


array.forEach(item => {
  ul.innerHTML += `<li class="${style.colorRed}">${item}</li>`;
});
