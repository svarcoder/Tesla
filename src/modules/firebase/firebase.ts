import { initializeApp } from "@firebase/app";
import { FacebookAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBQcfx-UE1cgh1n5RMSkuBugr4-maZXxaw",
	authDomain: "tesla-6ee32.firebaseapp.com",
	projectId: "tesla-6ee32",
	storageBucket: "tesla-6ee32.appspot.com",
	messagingSenderId: "654748652726",
	appId: "1:654748652726:web:1a8d0bd4a76d1c92b2c217",
	measurementId: "G-CPSDCS726G",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();
const provider2 = new FacebookAuthProvider();

export { auth, provider, storage, provider2, db };
