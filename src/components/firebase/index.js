import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB4ARFTG_StHa6Dl49kZesHK806RQITFVQ",
    authDomain: "pasokon-ecommerce.firebaseapp.com",
    projectId: "pasokon-ecommerce",
    storageBucket: "pasokon-ecommerce.appspot.com",
    messagingSenderId: "21987546779",
    appId: "1:21987546779:web:f38f5b218c135a3174983e"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore }
