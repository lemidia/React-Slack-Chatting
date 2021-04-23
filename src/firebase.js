import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDscLMhfUwBwUfNQWxLeIxVsmJX8cY-2qM",
  authDomain: "slack-lemidia.firebaseapp.com",
  projectId: "slack-lemidia",
  storageBucket: "slack-lemidia.appspot.com",
  messagingSenderId: "167370298236",
  appId: "1:167370298236:web:eee035f81e9bcd1c2f4af9",
  measurementId: "G-C36JM3PXPL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
