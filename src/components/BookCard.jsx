import { Link } from "react-router-dom";

const BookCard = ({ product }) => {
	return (
		// Card component with image, title, author and rating
		<Link to="/">
            <div key={product.id} className="p-4 hover:bg-violet-700 rounded-xl aspect-2/3 w-full">
                <img
                    className="h-full w-full object-top rounded-md"
                    src={product.volumeInfo.imageLinks?.thumbnail}
                    alt=""
                />
                <div className=" py-1 flex flex-col">
                    <h3 className="text-gray-500">
                        {product.volumeInfo.authors[0]}
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
