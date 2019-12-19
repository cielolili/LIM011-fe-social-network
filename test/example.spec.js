import { logIn, signIn, googleLogin } from '../src/controller/controller-firebase.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockfirestore,
);


describe('logIn', () => {
  it('debería poder iniciar sesiòn con email y password', () => {
    expect(typeof logIn).toBe('function');
  });
});

describe('Iniciar sesiòn', () => {
  it('Debería poder iniciar sesion', () => logIn('cielo@hotmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('cielo@hotmail.com');
    }));
});
describe('signIn', () => {
  it('deberìa poder registrar con email y password', () => {
    expect(typeof signIn).toBe('function');
  });
});
describe('Registrarse', () => {
  it('debería poder registrarse', () => signIn('cielo@hotmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('cielo@hotmail.com');
    }));
});
describe('googleLogin', () => {
  it('debería poder iniciar sesiòn con email y password', () => {
    expect(typeof googleLogin).toBe('function');
  });
});
