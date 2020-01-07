/* eslint-disable import/named */
/* eslint-disable import/extensions */
import {
  signOutSubmit, addNoteOnSubmit, deleteNoteOnClick, editar,
} from '../view-controller.js';

const itemNote = (objNote) => {
  const user = firebase.auth().currentUser;
  const divElement = document.createElement('div');
  divElement.innerHTML = `
    <div class="container-post">
    <div class="btn-post">
    <span id="btn-deleted-${objNote.id}">${user.uid === objNote.uid ? '<img id="trash" src="imagenes/delete.png"/>' : ''}</span>
    <button type="button" id="btn-edit-${objNote.id}">Editar</button>

    </div>
      <div class="photo-avatar">
      <p>${objNote.avatar === null ? '<img src="../imagenes/user.svg" class="avatar-usuario">' : `<img src="${objNote.avatar}" class="avatar-usuario">`}</p>
       <p id ="nombre-usuario">Publicado por ${objNote.usuario}</p> 
      
      </div>
      <section class="texto-post">
        <p>${objNote.title}</p>
        </section>
    </div>
  `;

  // agregando evento de click al btn eliminar una nota
  divElement.querySelector(`#btn-deleted-${objNote.id}`)
    .addEventListener('click', () => deleteNoteOnClick(objNote));
  divElement.querySelector(`#btn-edit-${objNote.id}`)
    .addEventListener('click', () => editar(objNote));
  return divElement;
};

export default (notes) => {
  const user = firebase.auth().currentUser;
  const home = document.createElement('div');
  const formContent = `
    <nav>
      <ul>
        <li><a id="btn-profile">Profile</a></li>
        <li><a id="btn-home">Home</a></li>
        <li><a id="btn-cerrar">Sign out</a></li>
      </ul>
    </nav>
    <!-- form add note -->
    <section>
      <figure>
        <div class="portada">
        
        </div>
        <div class="info-usuario"> 
        <p><img src="${user.photoURL}" class="foto-usuario"></p>
        <h3 id ="nombre-usuario">${user.displayName}</h3>
        </div>
      </figure>
      <main>
        <textarea name="" id="input-new-note" rows="4" cols="50" placeholder="¿Que quieres compartir?"></textarea>
        <section id="botones-post">
        <button id="btn-subir-img"> imagen </button>
        <button type="button" id="btn-add-note">Publicar</button>
        </section>
      </main>
    </section>
    <!-- notes -->
    <section>
      <div id="notes-list">
      </div>
    </section>
  `;
  home.innerHTML = formContent;
  const btnLogOut = home.querySelector('#btn-cerrar');
  btnLogOut.addEventListener('click', signOutSubmit);
  const buttonAddNote = home.querySelector('#btn-add-note');
  const div = home.querySelector('#notes-list');
  notes.forEach((note) => {
    div.appendChild(itemNote(note));
  });
  buttonAddNote.addEventListener('click', addNoteOnSubmit);
  return home;
};
