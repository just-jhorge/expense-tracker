import { useState } from "react";
import { auth } from "../firebase/config";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { signup, isLoading, error } = useSignup();

	const handleSubmit = (e) => {
		e.preventDefault();
		signup(email, password, username);
	};

	return (
		<>
			<h1>Sign Up Page</h1>
			<form className="flex flex-col">
				<label htmlFor="usernane">Username: </label>
				<input
					className="input"
					name="username"
					type="text"
					placeholder="Username..."
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label htmlFor="email">Email: </label>
				<input
					className="input"
					name="email"
					type="email"
					placeholder="Email..."
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor="password">Password: </label>
				<input
					className="input"
					name="password"
					type="password"
					placeholder="Password..."
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{!isLoading && <button>Signup</button>}
				{isLoading && <button disabled>Loading</button>}
				{error && <p>{error}</p>}
			</form>
		</>
	);
};

export default Signup;
