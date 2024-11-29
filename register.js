// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
// import {
//   getDatabase,
//   set,
//   ref,
// } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCyYwtKDV9VZ53RZ22Iy6PEVEhiJdiVoxY",
  authDomain: "kepa-competition.firebaseapp.com",
  databaseURL: "https://kepa-competition-default-rtdb.firebaseio.com",
  projectId: "kepa-competition",
  storageBucket: "kepa-competition.firebasestorage.app",
  messagingSenderId: "429461558074",
  appId: "1:429461558074:web:d5caa1f4c1967dc4abf603",
  measurementId: "G-3S4J7MH9E7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
// const analytics = getAnalytics(app);
// const database = getDatabase(app);

//const username = document.getElementById("username").value;

const submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Creting the user");
      window.location.href = "/index.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(error);
    });
});
//     signInWithEmailAndPassword(auth, email, password)
// .then((userCredential) => {
// // Signed in
// const user = userCredential.user;
// set(ref(database), 'users/'+user.uid),{
// username:username,
// email:email
// }
// alert('User Created')
// // ...
// })
// .catch((error) => {
// const errorCode = error.code;
// const errorMessage = error.message;
// alert(errorMessage);
// });
// })
