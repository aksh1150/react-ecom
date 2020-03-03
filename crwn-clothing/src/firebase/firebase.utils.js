import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDB7Lkd1NfrjEPJ-jiu6OtsztYQO5yb4jU",
  authDomain: "crwn-db-9a22c.firebaseapp.com",
  databaseURL: "https://crwn-db-9a22c.firebaseio.com",
  projectId: "crwn-db-9a22c",
  storageBucket: "crwn-db-9a22c.appspot.com",
  messagingSenderId: "258503296236",
  appId: "1:258503296236:web:0075ba50132b0f37d591c9",
  measurementId: "G-5018427MK3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
