import { useState, useEffect } from "react";

const useBookData = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setIsLoading] = useState(true);

	const cacheKey = "books:economics:v1";
	const url =
		"http://www.googleapis.com/books/v1/volumes?q=subject:economics&maxResults=40";

	useEffect(() => {
		const cached = localStorage.getItem(cacheKey);
		if (cached) {
			setProducts(JSON.parse(cached));
			setIsLoading(false);
			return;
		}
		fetch(url)
			.then((response) => {
				if (response.status >= 400) {
					throw new Error("Server error");
				}
				return response.json();
			})
			.then((prods) => {
                const items = prods.items || []
				setProducts(items);
                localStorage.setItem(cacheKey, JSON.stringify(items))
			})
			.catch((error) => setError(error))
			.finally(() => setIsLoading(false));
	}, []);

	return { products, error, loading };
};

export default useBookData;
