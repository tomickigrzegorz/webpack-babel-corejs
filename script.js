const ul = document.querySelector('.list');
const array = ['a', 'b', 'c', 'd', 'e'];

array.forEach(item => {
  console.log(item);
  ul.innerHTML += `<li>${item}</li>`;
});
