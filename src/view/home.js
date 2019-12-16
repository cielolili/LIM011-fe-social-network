import { signOutSubmit } from '../view-controller.js';

export default () => {
  const divHome = document.createElement('div');
  const divContent = `
        <div class="container"> 
        <h2>Home</h2>
        <button type ="button" id="btn-SignOut"> Cerrar Sesión </button>
        </div>
    `;

  divHome.innerHTML = divContent;

  const btnSignOut = divHome.querySelector('#btn-SignOut');
  btnSignOut.addEventListener('click', signOutSubmit);
  return divHome;
};
