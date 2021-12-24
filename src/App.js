import "./App.css";
import { useState, useEffect, useRef } from "react";
import { db } from "./firebase-config";
import {
	collection,
	getDocs,
	addDoc,
	updateDoc,
	doc,
	deleteDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

function App() {
	const [newName, setNewName] = useState("");
	const [newAge, setNewAge] = useState(0);
	const [users, setUsers] = useState([]);
	const usersCollectionRef = collection(db, "users");

	const nameRef = useRef();
	const ageRef = useRef();

	const createUser = async () => {
		await addDoc(usersCollectionRef, {
			name: newName,
			age: Number(newAge),
		});
	};

	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(usersCollectionRef);
			setUsers(
				data.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}))
			);
		};

		getUsers();
	}, []);

	const updateUser = async (id, age) => {
		const userDoc = doc(db, "users", id);
		const newFields = {
			age: age + 1,
		};

		await updateDoc(userDoc, newFields);
	};

	const deleteUser = async (id) => {
		const userDoc = doc(db, "users", id);
		await deleteDoc(userDoc);
	};

	return (
		<div className="App">
			<input
				placeholder="Name"
				onChange={(e) => {
					setNewName(e.target.value);
				}}
			/>
			<input
				placeholder="Age"
				type="number"
				onChange={(e) => {
					setNewAge(e.target.value);
				}}
			/>
			<button onClick={createUser}>Create user </button>
			{users.map((user) => {
				return (
					<div>
						<h1>Name: {user.name}</h1>
						<h1>Age: {user.age}</h1>
						<button
							onClick={() => {
								updateUser(user.id, user.age);
							}}
						>
							Increase Age
						</button>
						<button
							onClick={() => {
								deleteUser(user.id);
							}}
						>
							Delete
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default App;
