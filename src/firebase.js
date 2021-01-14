import firebase from "firebase/app";
import "firebase/database";
var firebaseConfig = {
  apiKey: "AIzaSyDm8uZvH3GP70UuGa-T4LNThK9QVv0SdAA",
  authDomain: "giftshub-challenge.firebaseapp.com",
  databaseURL: "https://giftshub-challenge-default-rtdb.firebaseio.com",
  projectId: "giftshub-challenge",
  storageBucket: "giftshub-challenge.appspot.com",
  messagingSenderId: "821633829365",
  appId: "1:821633829365:web:652b373631e6df4820f8bc",
  measurementId: "G-TY46KH1FGR",
};

firebase.initializeApp(firebaseConfig);

const fb = firebase;
export { fb as default };
