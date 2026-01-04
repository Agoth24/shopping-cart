import { Link } from "react-router-dom";

const BookCard = ({ product }) => {
	return (
		// Card component with image, title, author and rating
		<Link
			to="/"
			className="p-4 hover:bg-zinc-200 dark:hover:bg-zinc-900 rounded-xl ease-in-out duration-100"
		>
			<div key={product.id} className="flex flex-col justify-between">
				<div className="aspect-2/3 w-full mb-2 overflow-hidden">
					<img
						className="h-full w-full object-cover rounded-md"
						src={product.volumeInfo.imageLinks?.thumbnail}
						alt=""
					/>
				</div>
				<div className="flex flex-col gap-2 justify-self-end">
					<h3 className="text-sm text-gray-500">
						{product.volumeInfo.authors?.[0]}
					</h3>
					<h1 className="text-xl font-bold">
						{product.volumeInfo.title}
					</h1>
				</div>
			</div>
		</Link>
	);
};

export default BookCard;
