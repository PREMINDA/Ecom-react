import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC7t1b2tL8p7C_vkoii7y1E1RZvpCMbwkE",
  authDomain: "ecom-db-456aa.firebaseapp.com",
  projectId: "ecom-db-456aa",
  storageBucket: "ecom-db-456aa.appspot.com",
  messagingSenderId: "480354696241",
  appId: "1:480354696241:web:28b8cebf4db49e21c7e910",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
