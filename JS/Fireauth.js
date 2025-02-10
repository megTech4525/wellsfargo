// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNTNHstVOSBQqoAWq7IDZPngXY6lgyHic",
  authDomain: "wellsfargo-6bc06.firebaseapp.com",
  projectId: "wellsfargo-6bc06",
  storageBucket: "wellsfargo-6bc06.firebasestorage.app",
  messagingSenderId: "643447916734",
  appId: "1:643447916734:web:e9bc4ead3977e546b436ef",
  measurementId: "G-R57BF75HW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const registrationForm = document.getElementById('registrationForm');
        const loginForm = document.getElementById('loginForm');
        const toggleLink = document.getElementById('toggleLink');

        toggleLink.addEventListener('click', () => {
            registrationForm.classList.toggle('hidden');
            loginForm.classList.toggle('hidden');
            toggleLink.textContent = registrationForm.classList.contains('hidden')
                ? 'Don\'t have an account? Register'
                : 'Already have an account? Login';
        });


         // Populate the country dropdown with all countries
    const countrySelect = document.getElementById('country');
    const countries = new Intl.DisplayNames(['en'], { type: 'region' });

    const countryCodes = Object.keys(countries.of)
        .map(code => ({ code, name: countries.of(code) }))
        .sort((a, b) => a.name.localeCompare(b.name));

    countryCodes.forEach(({ code, name }) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = name;
        countrySelect.appendChild(option);
    });

    // Initialize Intl-Tel-Input for phone input
    const phoneInput = document.getElementById('phone');
    intlTelInput(phoneInput, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
        initialCountry: "auto",
        geoIpLookup: function (callback) {
            fetch('https://ipinfo.io/json?token=') // Replace with your token from ipinfo.io
                .then((response) => response.json())
                .then((data) => callback(data.country))
                .catch(() => callback("us"));
        }
    });

document.getElementById("registrationForm").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  const auth = getAuth()
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userData = {
                email: email,
                firstName: firstName,
                lastName: lastName
            }
            alert("Registration successful! Please log in.");
            
            const docRef = doc(db, "users", user.uid)
            setDoc(docRef, userData)
                .then(() => {
                window.location.href = "../login.html"; // Redirect to login page
                })
                .catch((error) => {
                    alert(error.message);
                  });
     
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode == 'auth/email-already-in-use') {
                alert("Email address already exist")

            }
            else{
                alert("unable to create user")
            }
                    })
     
  });
  
  // User Login
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login successful!");
        window.location.href = "../index.html"; // Redirect after login
      })
      .catch((error) => {
        alert(error.message);
      });
  });
  














// import { auth } from "../firebase.js";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

// // User Registration

// const registrationForm = document.getElementById('registrationForm');
//         const loginForm = document.getElementById('loginForm');
//         const toggleLink = document.getElementById('toggleLink');

//         toggleLink.addEventListener('click', () => {
//             registrationForm.classList.toggle('hidden');
//             loginForm.classList.toggle('hidden');
//             toggleLink.textContent = registrationForm.classList.contains('hidden')
//                 ? 'Don\'t have an account? Register'
//                 : 'Already have an account? Login';
//         });


//          // Populate the country dropdown with all countries
//     const countrySelect = document.getElementById('country');
//     const countries = new Intl.DisplayNames(['en'], { type: 'region' });

//     const countryCodes = Object.keys(countries.of)
//         .map(code => ({ code, name: countries.of(code) }))
//         .sort((a, b) => a.name.localeCompare(b.name));

//     countryCodes.forEach(({ code, name }) => {
//         const option = document.createElement('option');
//         option.value = code;
//         option.textContent = name;
//         countrySelect.appendChild(option);
//     });

//     // Initialize Intl-Tel-Input for phone input
//     const phoneInput = document.getElementById('phone');
//     intlTelInput(phoneInput, {
//         utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
//         initialCountry: "auto",
//         geoIpLookup: function (callback) {
//             fetch('https://ipinfo.io/json?token=') // Replace with your token from ipinfo.io
//                 .then((response) => response.json())
//                 .then((data) => callback(data.country))
//                 .catch(() => callback("us"));
//         }
//     });
// Logout
// document.getElementById("logoutButton")?.addEventListener("click", () => {
//   signOut(auth)
//     .then(() => {
//       alert("Logged out successfully!");
//       window.location.href = "login.html"; // Redirect to login page
//     })
//     .catch((error) => {
//       alert(error.message);
//     });
// });
















// import { auth } from "./firebase-config.js";
// import { signInWithEmailAndPassword } from "firebase/auth";

// document.getElementById("loginForm").addEventListener("submit", (e) => {
//   e.preventDefault();

//   const email = document.getElementById("loginEmail").value;
//   const password = document.getElementById("loginPassword").value;

//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       alert("Login successful!");
//       window.location.href = "dashboard.html"; // Redirect after login
//     })
//     .catch((error) => {
//       alert(error.message);
//     });
// });
