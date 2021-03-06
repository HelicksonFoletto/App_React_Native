import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJA45niKWcWkIBMmzVAHS4XAc2l21nqz0",
  authDomain: "foz-contra-a-dengue.firebaseapp.com",
  databaseURL: "https://foz-contra-a-dengue.firebaseio.com",
  projectId: "foz-contra-a-dengue",
  storageBucket: "foz-contra-a-dengue.appspot.com",
  messagingSenderId: "972732028369",
  appId: "1:972732028369:web:1a18c85cd6b15062993cf0",
  measurementId: "G-1HPHKPRMSW",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
