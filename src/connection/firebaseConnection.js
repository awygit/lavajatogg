
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDZxh4Wq5lzepZx7yZChFuB-x7JzOQ0Bvg',
  authDomain: 'ifs-lavajatogg.firebaseapp.com',
  projectId: 'ifs-lavajatogg',
  storageBucket: 'ifs-lavajatogg.appspot.com',
  messagingSenderId: '265627655976',
  appId: '1:265627655976:web:38d262ca60978e02ec7a1d'
};

let firebaseApp;

//if (!getApps) {
  firebaseApp = initializeApp(firebaseConfig);
//}

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export { auth, firestore };