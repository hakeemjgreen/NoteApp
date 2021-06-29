// Firebase App (the core Firebase SDK) is always required and must be listed first
import Firebase from "firebase";

const FirebaseConfig = () =>{
    // TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: "AIzaSyC6agxTcM-9TWBAj3zGW69FtXNg8xmQRwA",
    authDomain: "notebook-71a84.firebaseapp.com",
    projectId: "notebook-71a84",
    storageBucket: "notebook-71a84.appspot.com",
    messagingSenderId: "880771990232",
    appId: "1:880771990232:web:f4d9c2a956a8dae7dc8dad",
    measurementId: "G-5DSGMDX0Y3"
  };
}

    // Initialize Firebase
    if (!Firebase.apps.length) {
        Firebase.initializeApp(firebaseConfig);
    }
    else {
        Firebase.app(); // if already initialized, use that one
    }

export default FirebaseConfig;