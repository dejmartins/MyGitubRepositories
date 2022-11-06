// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GithubAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2Uo2CrfxJJfY0lTU8UUN6N-FYVN9acQk",
  authDomain: "githubportfolio-a549a.firebaseapp.com",
  projectId: "githubportfolio-a549a",
  storageBucket: "githubportfolio-a549a.appspot.com",
  messagingSenderId: "1003081259384",
  appId: "1:1003081259384:web:4812abc071a9862749108d",
  measurementId: "G-T0VE00HM8T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GithubAuthProvider();
const auth = getAuth();

export {
  app,
  provider,
  auth,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
};
