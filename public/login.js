import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCI62v_t4dBwjE5WYU7ugUM8ChNgTmTrjw",
  authDomain: "feedbacko-58694.firebaseapp.com",
  projectId: "feedbacko-58694",
  storageBucket: "feedbacko-58694.appspot.com",
  messagingSenderId: "16485585008",
  appId: "1:16485585008:web:b09b40e731a64f76c824b5",
  measurementId: "G-4X670XDHFK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("signInButton").addEventListener("click", function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      window.location.href = "/home.html";
    })
    .catch((error) => {
      // Error handling
      console.error(error.message);
    });
});