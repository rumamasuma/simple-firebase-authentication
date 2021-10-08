import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication =() =>{
    initializeApp(firebaseConfig);
}

// const app = initializeApp(firebaseConfig);
export default initializeAuthentication;
