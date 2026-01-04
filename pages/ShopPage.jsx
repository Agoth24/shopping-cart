import { useState, useEffect } from "react";
import Loading from "../src/components/Loading";

const ShopPage = () => {
	const useBookData = () => {
		const [products, setProducts] = useState([]);
		const [error, setError] = useState(null);
		const [loading, setIsLoading] = useState(true);

		useEffect(() => {
			fetch(
				"https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=40"
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
	const { products, error, loading } = useBookData();

	if (loading) return <Loading />;
	if (error) return <p>A network error has occurred</p>;

	return (
		<section className="p-8">
			<div className="flex flex-col gap-4 p-4 bg-zinc-100 dark:bg-zinc-900 rounded-xl">
				{products.map((product) => (
					<h1 key={product.id}>{product.volumeInfo.title}</h1>
				))}
			</div>
		</section>
	);
};

export default ShopPage;
