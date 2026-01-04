import { useEffect } from "react";
import { titles } from "../assets/titles";

const useBooksFetcher = () => {
	useEffect(() => {
		const fetchBooks = async () => {
			const books = [];

			for (const title of titles) {
				try {
					const res = await fetch(
						`https://openlibrary.org/search.json?q=${encodeURIComponent(
							title
						)}&limit=1`
					);
					const data = await res.json();
					if (data.docs && data.docs[0]) {
						books.push(data.docs[0]);
					}
				} catch (error) {
					console.error(`Failed to fetch: ${title}`, error);
				}

				// wait 200ms between requests
				await new Promise((resolve) => setTimeout(resolve, 200));
			}

			console.log(JSON.stringify(books, null, 2));
		};

		fetchBooks();
	}, []);
};

export default useBooksFetcher;
