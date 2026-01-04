import useBookData from "../hooks/useBookData";
import BookCard from "../src/components/BookCard";
import Loading from "../src/components/Loading";

const ShopPage = () => {
	const { products, error, loading } = useBookData();

	if (loading) return <Loading />;
	if (error) return <p>A network error has occurred</p>;

	return (
		<section className="p-4">
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-start gap-6 rounded-xl">
				{products.map((product) => (
					<BookCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};

export default ShopPage;
