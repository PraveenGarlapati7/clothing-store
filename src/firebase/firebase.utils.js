import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAuxd05y7kYe3Tnc39JbANKkocqDa0Lrlw",
  authDomain: "clothing-store-db-c193f.firebaseapp.com",
  projectId: "clothing-store-db-c193f",
  storageBucket: "clothing-store-db-c193f.appspot.com",
  messagingSenderId: "398776534711",
  appId: "1:398776534711:web:7579928136b3ec7b7e6f32",
  measurementId: "G-DGG8BZLJXE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
