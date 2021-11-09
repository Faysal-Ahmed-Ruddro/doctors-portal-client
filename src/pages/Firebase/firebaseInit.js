import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
const initializeFirebaseAuth = () => {
  initializeApp(firebaseConfig);
};
export default initializeFirebaseAuth;