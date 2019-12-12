import { logInOnSubmit } from '../view-controller.js';

export default () => {
  const formLogin = document.createElement('form');
  const formContent = `
 <div class = "container-form">
    <form class="formulario">
      <h2>Sign up</h2>
        <input type="email" class="txt-form" id="email-login" placeholder = "Ingrese E-mail">
        <input type="password" class="txt-form" id="password-login" placeholder = "Ingrese Contraseña">
      <button class='btn-form' id='btn-login' type="button"> Login </button>
      <button class='btn-form' id='btn-login-google' type="button"> <img src='imagenes/google.jpeg'/> Sign up with facebook </button>
      <button class='btn-form' id='btn-login-facebook' type="button"> <img src='imagenes/facebook.jpeg'/> Sign up with google </button>
      <a href='#SignIn'> Sign in here </a>
    </form>
    </div>
 `;
  formLogin.innerHTML = formContent;
};
const btnLogIn = document.querySelector('#btn-login');
btnLogIn.addEventListener('click', logInOnSubmit);

const btnGoogle = document.querySelector('#btn-login-google');
btnGoogle.addEventListener('click', logInOnSubmit);

const btnFacebook = document.querySelector('#btn-login-facebook');
btnFacebook.addEventListener('click', logInOnSubmit);
