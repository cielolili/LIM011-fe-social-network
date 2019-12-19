// eslint-disable-next-line import/named
import { signOutSubmit } from '../view-controller.js';

export default () => {
  const home = document.createElement('div');
  const divContent = `
        <div class="container"> 
        <h2>Home</h2>
        <nav>
        <ul>
        <li><a id="btn-profile">Profile</a></li>
        <li><a id="btn-home">Home</a></li>
        <li><a id="btn-cerrar">Sign out</a></li>
        </ul>
      </nav>
      <textarea name="" id="aparece" rows="10"></textarea>
      </div>
    `;

  home.innerHTML = divContent;

  const btnSignOut = home.querySelector('#btn-cerrar');
  btnSignOut.addEventListener('click', signOutSubmit);
  const aparece = home.querySelector('#aparece');
  aparece.innerHTML = 'hola';
  return home;
};
