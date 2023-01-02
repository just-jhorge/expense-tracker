import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
	const { user } = useAuthContext();

	return (
		<nav className="h-12 bg-white shadow-md flex items-center justify-center">
			<div className="container mx-auto flex items-center justify-between">
				<h2 className="font-bold text-2xl">
					<Link to="/">Expenser</Link>
				</h2>
				{!user && (
					<div>
						<Link to="/login" className="mr-5">
							Login
						</Link>
						<Link to="/signup">Signup</Link>
					</div>
				)}
				{user && (
					<div>
						<p>
							<p>Hello, {user.username}</p>
						</p>
						<button>Logout</button>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
