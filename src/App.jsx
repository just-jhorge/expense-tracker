import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {
	const { user, authIsReady } = useAuthContext();
	console.log(user, authIsReady);

	return (
		<div>
			{authIsReady && (
				<>
					<Navbar />
					<Routes>
						<Route
							path="/"
							element={user ? <Home /> : <Navigate to="login" />}
						/>
						<Route
							path="/login"
							element={user ? <Navigate to="/" /> : <Login />}
						/>
						<Route
							path="/signup"
							element={user ? <Navigate to="/" /> : <Signup />}
						/>
					</Routes>
				</>
			)}
		</div>
	);
}

export default App;
