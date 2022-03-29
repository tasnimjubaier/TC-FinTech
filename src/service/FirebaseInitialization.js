// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANSyGxxULf4M5Ij5pDs4KX-2nxyYVERDY",
  authDomain: "tc-fintech.firebaseapp.com",
  projectId: "tc-fintech",
  storageBucket: "tc-fintech.appspot.com",
  messagingSenderId: "309492408984",
  appId: "1:309492408984:web:dfe521949d7662e493e6ed",
  measurementId: "G-L7B9ECCQ2P"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)



// import { getStorage, ref, uploadBytes } from "firebase/storage";

// const storage = getStorage();
// const storageRef = ref(storage, 'images/mountains.jpg');

// // Create file metadata including the content type
// /** @type {any} */
// const metadata = {
//   contentType: 'image/jpeg',
// };

// // Upload the file and metadata
// const uploadTask = uploadBytes(storageRef, file, metadata);