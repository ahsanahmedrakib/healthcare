import { initializeApp } from "firebase/app";
import firebaseConfig from "./FIrebase.config";

const initializeAuthentiction = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentiction;
