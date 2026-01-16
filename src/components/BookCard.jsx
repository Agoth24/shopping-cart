import { Link } from "react-router-dom";
import DefaultCover from "./DefaultCover";

const BookCard = ({ product, coverUrl }) => {
	const author = Array.isArray(product.author_name)
		? product.author_name[0]
		: product.author_name;
	return (
		// Card component with image, title, author and rating
		<Link
			to="/"
			className="p-4 hover:bg-zinc-200 dark:hover:bg-zinc-900 rounded-xl ease-in-out duration-100"
		>
			<div key={product.key} className="flex flex-col justify-between">
				<div className="aspect-2/3 w-full mb-2 overflow-hidden">
					{coverUrl ? (
						<img
							className="flex items-center justify-center h-full w-full object-cover rounded-md"
							src={coverUrl}
							alt="product.title"
						/>
					) : (
						<DefaultCover />
					)}
				</div>
				<div className="flex flex-col gap-2 justify-self-end">
					<h3 className="text-sm text-gray-500">{author}</h3>
					<h1 className="text-xl font-bold">{product.title}</h1>
				</div>
			</div>
		</Link>
	);
};

export default BookCard;
