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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
