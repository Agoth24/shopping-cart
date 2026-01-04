import { useState, useEffect } from "react";

const useBookData = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch(
			"https://www.googleapis.com/books/v1/volumes?q=subject:economics&maxResults=40",
			{
				"Access-Control": "Allow-Origin",
			}
		)
			.then((response) => {
				if (response.status >= 400) {
					throw new Error("Server error");
				}
				return response.json();
			})
			.then((prods) => setProducts(prods.items))
			.catch((error) => setError(error))
			.finally(() => setIsLoading(false));
	}, []);

	return { products, error, loading };
};

export default useBookData;
