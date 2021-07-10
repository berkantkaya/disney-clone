import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDeB2WI0N6tbYfHgF8UORicSMxqakfJMpA",
    authDomain: "disney-clone-1db33.firebaseapp.com",
    projectId: "disney-clone-1db33",
    storageBucket: "disney-clone-1db33.appspot.com",
    messagingSenderId: "520501748084",
    appId: "1:520501748084:web:b9fd5f383c054c0a964c21"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;