import { useOutletContext } from "react-router-dom";
import BookCard from "../components/BookCard";
import books from "../../assets/books";
import Loading from "../components/Loading";
import usePreLoadImages from "../hooks/usePreLoadImages";

const ShopPage = () => {
	const { data, loading } = usePreLoadImages();
	const { addedBooks, setAddedBooks } = useOutletContext();

	if (loading) return <Loading />;

	const coverMap = new Map(data.map((item) => [item.coverId, item.coverUrl]));

	const handleToggleBook = (book) => {
		setAddedBooks((prev) => {
			const exists = prev.some((item) => item.key === book.key);
			if (exists) {
				return prev.filter((item) => item.key !== book.key);
			}
			return [...prev, book];
		});
	};

	return (
		<section className="p-4 md:p-8">
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 rounded-xl">
				{books.map((book) => (
					<BookCard
						key={book.key}
						product={book}
						coverUrl={coverMap.get(book.cover_i)}
						isAdded={addedBooks.some((item) => item.key === book.key)}
						onToggle={handleToggleBook}
					/>
				))}
			</div>
		</section>
	);
};

export default ShopPage;
