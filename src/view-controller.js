import {
  signIn, logIn, googleLogin, facebookLogin, signOut,
} from './controller/controller-firebase.js';
// eslint-disable-next-line import/prefer-default-export
const changeHash = (hash) => {
  // eslint-disable-next-line no-restricted-globals
  location.hash = hash;
};
export const signInOnSubmit = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  signIn(email, password)
    .then(() => alert('Datos Guardados'), changeHash('/logIn'))
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
};
export const accesoLogin = () => {
  const user = firebase.auth().currentUser;
  if (user != null) {
    const displayname = user.displayname;
    const email = user.email;
    const emailVerified = user.emailVerified;
    const photoUrl = user.photoUrl;
    const isanonymous = user.isanonymous;
    const uid = user.uid;
    const providerData = user.providerData;
    console.log('logueado', user.email);
  } else {
    console.log('no existe ningún usuario');
  }
};
export const loginWithGoogle = () => {
  googleLogin().then(() => {
    accesoLogin();
    changeHash('/Home');
  });
};
export const loginWithFacebook = () => {
  facebookLogin().then(() => {
    changeHash('/Home');
  });
};

export const logInOnSubmit = () => {
  const email = document.querySelector('#email-login').value;
  const password = document.querySelector('#password-login').value;
  logIn(email, password)
    .then(() => changeHash('/Home'))
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
};
export const signOutSubmit = () => {
  signOut().then(() => {
    alert('cerrando')
    accesoLogin();
    changeHash('/logIn');
  }).catch((error) => {
    console.log(error);
  });
};
