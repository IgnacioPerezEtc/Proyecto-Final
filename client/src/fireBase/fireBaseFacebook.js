import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD99zmcRfAs8JCxx3j1EVeFGcuF_9lXhN4",
    authDomain: "yourdestiny-27b28.firebaseapp.com",
    projectId: "yourdestiny-27b28",
    storageBucket: "yourdestiny-27b28.appspot.com",
    messagingSenderId: "814044564457",
    appId: "1:814044564457:web:7c7fb764efd58d5afe5978"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new FacebookAuthProvider();

export const signedWithFacebook = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error);
      });
  };