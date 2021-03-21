import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDhtM62jtDIvEw3IzStMHW4WTPrvdET4K8",
    authDomain: "clone-d5501.firebaseapp.com",
    projectId: "clone-d5501",
    storageBucket: "clone-d5501.appspot.com",
    messagingSenderId: "997043796177",
    appId: "1:997043796177:web:db7dee8e030372e3f9edf0",
    measurementId: "G-NM7B5PKN1S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};