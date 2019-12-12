// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line max-len
export const signIn = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);
// eslint-disable-next-line max-len
export const logIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const googleLogin = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
export const facebookLogin = () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
