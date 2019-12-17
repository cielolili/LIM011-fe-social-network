import { logIn, signIn } from '../src/controller/controller-firebase.js';

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
  it('Debería poder iniciar sesion', () => logIn('front@end.la', '123456')
    .then((user) => {
      expect(user.email).toBe('front@end.la');
    }));
});
