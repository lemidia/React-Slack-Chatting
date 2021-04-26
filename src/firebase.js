import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

// You need to use your own firebase configuration value
// to run this application.
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
