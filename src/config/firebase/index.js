import firebase from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyCGz5yYGUUu0PraLMNm4Xfit-ANu_qqoXg",
    authDomain: "webprogramming-14870.firebaseapp.com",
    databaseURL: "https://webprogramming-14870-default-rtdb.firebaseio.com",
    projectId: "webprogramming-14870",
    storageBucket: "webprogramming-14870.appspot.com",
    messagingSenderId: "430988763683",
    appId: "1:430988763683:web:5423fba03137fa39a74796"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;