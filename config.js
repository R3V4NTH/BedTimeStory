import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCMBtXevZ4jWEDtHpxmyI7JnhFb_JEHepM",
  authDomain: "bedtimestories-3e6df.firebaseapp.com",
  databaseURL: "https://bedtimestories-3e6df.firebaseio.com",
  projectId: "bedtimestories-3e6df",
  storageBucket: "bedtimestories-3e6df.appspot.com",
  messagingSenderId: "647284867562",
  appId: "1:647284867562:web:9212eba183e04ad4b6f293",
  measurementId: "G-J6W7XQF3RS"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();