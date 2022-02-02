import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEsGjiVXScAumDEY06u9b1TMLe4fvXOJk",
  authDomain: "db-tweet-app.firebaseapp.com",
  projectId: "db-tweet-app",
  storageBucket: "db-tweet-app.appspot.com",
  messagingSenderId: "282258874399",
  appId: "1:282258874399:web:6fe22239a336bf931c752a"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore();
const getRefCollection = (collectionName) => {
  return collection(database, collectionName);
}

//AUTH
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
/* const persistence = setPersistence(auth, browserLocalPersistence); */

export {googleProvider, auth, getRefCollection}
export default firebaseApp;