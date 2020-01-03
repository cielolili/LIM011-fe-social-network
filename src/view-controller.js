/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/extensions */
import {
  signIn, logIn, googleLogin, facebookLogin, signOut, addNote, deleteNote,
} from './controller/controller-firebase.js';

const changeHash = (hash) => {
  // eslint-disable-next-line no-restricted-globals
  location.hash = hash;
};
const accesoLogin = () => {
  const user = firebase.auth().currentUser;
  if (user != null) {
    const displayName = user.displayname;
    const email = user.email;
    alert('logueado', user.email, user.displayName);
  } else {
    console.log('no existe ningún usuario');
  }
};
export const signInOnSubmit = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  signIn(email, password)
    // eslint-disable-next-line no-alert
    .then(() => alert('Datos Guardados'), changeHash('/logIn'))
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
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
    accesoLogin();
    changeHash('/logIn');
    alert('Cerrando sesión');
  }).catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
  });
};
export const addNoteOnSubmit = (event) => {
  event.preventDefault();
  const input = document.getElementById('input-new-note');
  if (input.value === '') {
    alert('Campos vacíos');
  } else {
    addNote(input.value)
      .then((docRef) => {
        input.value = '';
        console.log('Document written with ID: ', docRef.id);
      //  data.message = 'Nota agregada';
      }).catch((error) => {
        input.value = '';
        console.error('Error adding document: ', error);
      //  data.message = 'Lo sentimos, no se pudo agregar la nota';
      });
  }
};

export const deleteNoteOnClick = (objNote) => deleteNote(objNote.id);
