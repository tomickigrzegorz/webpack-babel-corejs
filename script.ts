const ul = document.querySelector('.list');
const array = ['a', 'b', 'c', 'd', 'e'];

array.forEach(item => {
  console.log(item);
  ul.innerHTML += `<li>${item}</li>`;
});

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  console.log(person.firstName)
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Greg", lastName: "User" };

const h1 = document.querySelector('h1');
h1.textContent = greeter(user);