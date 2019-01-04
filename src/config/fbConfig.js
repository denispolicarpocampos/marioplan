import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAJQxJt4N9gneBHQa23RbN4-JvIWiidgZE",
  authDomain: "net-ninja-marioplan-6cec5.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-6cec5.firebaseio.com",
  projectId: "net-ninja-marioplan-6cec5",
  storageBucket: "net-ninja-marioplan-6cec5.appspot.com",
  messagingSenderId: "343285815085"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 