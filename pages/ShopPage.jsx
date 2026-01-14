import BookCard from "../src/components/BookCard";
import books from "../assets/books";

const ShopPage = () => {

    
	return (
		<section className="p-4 md:p-8">
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 rounded-xl">
				{books.map((book) => (
					<BookCard key={book.key} product={book} />
				))}
			</div>
		</section>
	);
};

export default ShopPage;
