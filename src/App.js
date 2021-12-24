import "./App.css";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
	const [users, setUsers] = useState([]);
	const usersCollectionRef = collection(db, "users");

	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(usersCollectionRef);
			console.log(data);
		};

		getUsers();
	}, []);

	return (
		<div className="App">
			<h1>Hello World</h1>
		</div>
	);
}

export default App;
