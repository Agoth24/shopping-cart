import { useState, useEffect } from "react";
import books from "../../assets/books";

const preloadHelper = (url) => {
	return Promise.race([
		new Promise((resolve, reject) => {
			const imgElement = new Image();
			imgElement.onload = () => resolve(url);
			imgElement.onerror = reject;
			imgElement.src = url;
		}),
		new Promise((_, reject) => {
			setTimeout(() => reject(new Error("Image preload timeout")), 2000);
		}),
	]);
};

const getBookUrls = (books) => {
	return books
		.filter((book) => book.cover_i)
		.map((book) => ({
			coverId: book.cover_i,
			coverUrl: `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`,
		}));
};

const usePreLoadImages = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState([]);

	useEffect(() => {
		const bookUrls = getBookUrls(books);

		Promise.allSettled(bookUrls.map((item) => preloadHelper(item.coverUrl)))
			.then((res) => {
				const successfulFetch = res.map((result, index) =>
					result.status === "fulfilled" ? bookUrls[index] : null
				).filter(Boolean);

                setData(successfulFetch);

				const failed = res.find((r) => r.status === "rejected");
				if (failed) setError(failed.reason);

				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				setError(err);
			});
	}, []);

	return { data, loading, error };
};

export default usePreLoadImages;
