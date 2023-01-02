import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
	const [isCancelled, setIsCancelled] = useState(false);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const { dispatch } = useAuthContext();

	const signup = async (email, password, username) => {
		setError(null);
		setIsLoading(true);

		try {
			const response = await signInWithEmailAndPassword(email, password);
			if (!response) throw new Error("Signup could not be completed");
			await response.user.displayName({ username });
			dispatch({ type: "LOGIN", payload: response.user });

			if (!isCancelled) {
				setError(null);
				setIsLoading(false);
			}
		} catch (err) {
			if (!isCancelled) {
				setIsLoading(false);
				setError(err.message);
			}
		}
	};

	useEffect(() => {
		return () => setIsCancelled(true);
	});

	return { signup, error, isLoading };
};
