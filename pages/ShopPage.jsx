import { useEffect, useState } from "react";
import BookCard from "../src/components/BookCard";
import Loading from "../src/components/Loading";
import books from "../assets/books";
const ShopPage = () => {
	const [imagesReady, setImagesReady] = useState(false);

	useEffect(() => {
		let cancelled = false;
		const coverUrls = books
			.filter((book) => book.cover_i)
			.map(
				(book) =>
					`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
			);

		let loaded = 0;
		const handleDone = () => {
			loaded += 1;
			if (!cancelled && loaded >= coverUrls.length) {
				setImagesReady(true);
			}
		};

		coverUrls.forEach((url) => {
			const img = new Image();
			img.onload = handleDone;
			img.onerror = handleDone;
			img.src = url;
		});

		return () => {
			cancelled = true;
		};
	}, []);

	return (
		<section className="p-4 md:p-8">
			<div
				className={`transition-opacity duration-150 ${
					imagesReady
						? "opacity-100"
						: "opacity-0 pointer-events-none"
				}`}
			>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 rounded-xl">
					{books.map((book) => (
						<BookCard key={book.key} product={book} />
					))}
				</div>
			</div>
			<div
				className={`transition-opacity duration-150 ${
					imagesReady
						? "opacity-0 pointer-events-none"
						: "opacity-100"
				}`}
			>
				<div className="w-full min-h-screen rounded-xl bg-gray-200 dark:bg-zinc-900"></div>
			</div>
		</section>
	);
};

export default ShopPage;
