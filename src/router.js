// eslint-disable-next-line import/extensions
import SignIn from './view/SignIn.js';
import Login from './view/login.js';

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/Login');
  } else if (hash === '#/SignIn') {
    return viewTmp('#/SignIn');
  } else if (hash === '#/login') {
    return viewTmp('#/Login') }
  
  return viewTmp('#/SignIn');
};

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const root = document.getElementById('root');
  root.innerHTML = '';
  // eslint-disable-next-line default-case
  switch (router) {
    case 'SignIn':
      root.appendChild(SignIn());
      break;
    case 'Login':
      root.appendChild(Login());
      break;
  }
};

// eslint-disable-next-line import/prefer-default-export
export const initRouter = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};
