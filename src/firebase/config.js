import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDJz1qZDywWqHzmpSkQqZNnY2ajW8w6O-g',
  authDomain: 'thedojo-660de.firebaseapp.com',
  projectId: 'thedojo-660de',
  storageBucket: 'thedojo-660de.appspot.com',
  messagingSenderId: '177522204590',
  appId: '1:177522204590:web:cdd00de31ddcc8ff14723f',
  measurementId: 'G-CSYH0NQBYP',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
