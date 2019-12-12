
// eslint-disable-next-line import/extensions
import { signIn, logIn } from './controller/controller-firebase.js';
// eslint-disable-next-line i(mport/prefer-default-export
const changeHash = (hash) => {
  location.hash = hash;
};
// eslint-disable-next-line import/prefer-default-export
export const signInOnSubmit = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  signIn(email, password)
    .then(() => alert('Datos Guardados'), changeHash('/logIn'))
    .catch((error) => {
      const errorMessage = error.message;
      const errorCode = error.code;
      if (errorCode === 'auth/weak-password') {
        // eslint-disable-next-line no-alert
        alert('Tu contraseña es muy corta');
      } else {
        alert(errorMessage);
      }
    });
};
export const logInOnSubmit = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  logIn(email, password)
    .then(() => changeHash('/Home'))
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
}
;