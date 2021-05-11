'use strict';

const userData = {
  email: 'info@email.com',
  password: 'mi-contraseña-super-secreta'
};
for (let item in userData) {
  const inputElement = document.querySelector(`.js-${item}`);
  inputElement.value = userData[item];
}