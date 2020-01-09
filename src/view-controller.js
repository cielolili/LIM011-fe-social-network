/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/extensions */
import {
  signIn, logIn, googleLogin, facebookLogin, signOut,
  addNote, deleteNote, saveUsers, editNote, countLove,
} from './controller/controller-firebase.js';

const changeHash = (hash) => {
  // eslint-disable-next-line no-restricted-globals
  location.hash = hash;
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
    changeHash('/Home');
    saveUsers();
  });
};

export const loginWithFacebook = () => {
  facebookLogin().then(() => changeHash('/Home'));
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
        console.log(docRef.id);
      }).catch((error) => {
        input.value = '';
        console.error('Error adding document: ', error);
      });
  }
};

export const editNoteOnSubmit = (objNote) => {
  const input = document.getElementById('input-edit-note');
  editNote(input.value, objNote)
    .then(() => {
      console.log('Document successfully updated');
      //  data.message = 'Nota agregada';
    }).catch((error) => {
      console.error('Error updating document: ', error);
      //  data.message = 'Lo sentimos, no se pudo agregar la nota';
    });
};

export const deleteNoteOnClick = (objNote) => deleteNote(objNote.id);

export const countLoveOnClick = (objNote) => {
  // const user = firebase.auth().currentUser;
  const i = +1;
  countLove(objNote, i);
};
