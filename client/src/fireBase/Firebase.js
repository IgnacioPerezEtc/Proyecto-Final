import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { findOrCreate } from "../redux/actions";

const firebaseConfig = {
  apiKey: "AIzaSyD99zmcRfAs8JCxx3j1EVeFGcuF_9lXhN4",
  authDomain: "yourdestiny-27b28.firebaseapp.com",
  projectId: "yourdestiny-27b28",
  storageBucket: "yourdestiny-27b28.appspot.com",
  messagingSenderId: "814044564457",
  appId: "1:814044564457:web:7c7fb764efd58d5afe5978",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      let data = {
        email: result.user.email,
        name: result.user.displayName,
      };
      findOrCreate(data);
      window.setTimeout(() => {
        window.location.href = "/home";
      },1000);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signedWithFacebook = () => {
  signInWithPopup(auth, providerFacebook)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
