import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyC-poLbDPbo5Bw5SsJQDRWJ6qjzG_QcrJ0",
	authDomain: "fir-tutorial-2ba8d.firebaseapp.com",
	projectId: "fir-tutorial-2ba8d",
	storageBucket: "fir-tutorial-2ba8d.appspot.com",
	messagingSenderId: "674766416052",
	appId: "1:674766416052:web:bdba8a922137c4955dcfe1",
	measurementId: "G-BTSVY6E0V4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
