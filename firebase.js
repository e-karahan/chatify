import firebase from 'firebase';

/*
const firebaseConfig = {
    apiKey: "AIzaSyDNPWzL2zRK29RPemvqYwG6N8gBxdf5GE4",
    authDomain: "chatify-ab7fb.firebaseapp.com",
    projectId: "chatify-ab7fb",
    storageBucket: "chatify-ab7fb.appspot.com",
    messagingSenderId: "309777958868",
    appId: "1:309777958868:web:81e36904efa7978bf8f841"
  };
*/

const firebaseConfig = {
  apiKey: "AIzaSyCUMWAA6ILiGc08ENp20U5pvLXhi_J9Jxs",
  authDomain: "chatapp-7cd2f.firebaseapp.com",
  projectId: "chatapp-7cd2f",
  storageBucket: "chatapp-7cd2f.appspot.com",
  messagingSenderId: "738218615901",
  appId: "1:738218615901:web:eb7cc1ec13d06f3ec1d9b4"
};


const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};