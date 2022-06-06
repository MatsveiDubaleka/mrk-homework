const body = document.querySelector('body');
let firstName = document.querySelector('#first__name')
let lastName = document.querySelector('#last__name')
let email = document.querySelector('#email')
let addressFirst = document.querySelector('#address_first')
let addressLast = document.querySelector('#address_two')
let city = document.querySelector('#city')
let size = document.querySelector('#size')
let zipCode = document.querySelector('#zip-code')
let submit = document.querySelector('#submit')

const USERS = [];

submit.addEventListener('click', () => {
  let usersLength = USERS.length + 1;
  let user = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    addressFirst: addressFirst.value,
    addressLast: addressLast.value,
    city: city.value,
    size: size.value,
    zipCode: zipCode.value,
  }
  USERS.push(user);

  let userContainer = document.createElement('div');
  userContainer.classList.add('user__container');
  document.body.appendChild(userContainer);

  for(let key in user) {
    let userKeys = document.createElement('div')
    userKeys.classList.add(key)
    userKeys.textContent = key + ': ' + user[key];
    userContainer.appendChild(userKeys)
  }
});