// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg82nFXALaYrHEXMTVX7YQ5OsecuKUYTk",
  authDomain: "twitter-yt-42457.firebaseapp.com",
  projectId: "twitter-yt-42457",
  storageBucket: "twitter-yt-42457.appspot.com",
  messagingSenderId: "291180732846",
  appId: "1:291180732846:web:eb6ff10639b14804f1283f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };