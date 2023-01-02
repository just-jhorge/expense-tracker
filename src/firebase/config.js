import { initializeApp } from "@firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBYbta6XoKRvpLqLJzS-v-PTD6FZj2HaoE",
	authDomain: "expense-tracker-930a9.firebaseapp.com",
	projectId: "expense-tracker-930a9",
	storageBucket: "expense-tracker-930a9.appspot.com",
	messagingSenderId: "765973470780",
	appId: "1:765973470780:web:84af8bacc11dc3f47e2d39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// time stamps
// const timeStamp = firebase.firestore.Timestamp;

export { auth, db };
