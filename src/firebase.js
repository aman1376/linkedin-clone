// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAfM_8VWOdrjW4He6swVDJIzecOun7kct8",
    authDomain: "linkedin-clone-9c795.firebaseapp.com",
    projectId: "linkedin-clone-9c795",
    storageBucket: "linkedin-clone-9c795.appspot.com",
    messagingSenderId: "31661971692",
    appId: "1:31661971692:web:ac74063fd3ef0dbcdfadc9",
    measurementId: "G-RCNMD07L4G"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth=firebase.auth();
export{db,auth};