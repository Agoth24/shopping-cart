import { Link } from "react-router-dom";
const HomePage = () => {
	return (
		<section className="p-4">
			<div className="flex flex-col gap-8 items-center justify-center  text-center min-h-[70vh]">
				<h1 className="text-6xl font-bold text-center dark:text-white">
					Your Next Great Read Awaits
				</h1>
				<h3 className="text-xl text-zinc-600">
					Explore thousands of books across every genre
				</h3>
					<Link className="px-6 py-3 bg-zinc-900 text-white rounded-lg dark:border border-zinc-700 hover:bg-violet-800 transition" to="/shop">Browse Our Collection</Link>
			</div>
		</section>
	);
};

export default HomePage;
