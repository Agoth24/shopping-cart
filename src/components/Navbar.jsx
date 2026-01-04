import { ShoppingCart, BookOpenText, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const links = ["Home", "Shop", "Cart"];

	return (
		<header className=" sticky top-0">
			<nav className="flex p-4 sm:px-8 justify-between dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 md:grid md:grid-cols-3">
				{/* Logo container */}
				<Link
					className="flex items-center gap-2 hover:text-violet-800 ease-in-out duration-150 w-max"
					to="/"
				>
					<BookOpenText size={25} />
					<h1 className="text-2xl font-medium">BLOOM Bookstore</h1>
				</Link>
				<ul className="hidden md:flex gap-8 items-center justify-center gap-">
					{links.map((link, index) => {
						return (
							<Link key={index}
								to={link !== "Home" ? link.toLowerCase() : "/"}
								className="hover:text-violet-800 ease-in-out duration-150"
							>
								{link}
							</Link>
						);
					})}
				</ul>
				{/* Mobile Button container */}
				<div className="flex justify-end items-center gap-4 *:hover:text-violet-800 ease-in-out duration-150">
					{/* Cart Button */}
					<Link to="/cart">
						<ShoppingCart className="" size={25} />
					</Link>
					{/* Hamburger Menu button */}
					<button
						className="md:hidden"
						onClick={() => setIsOpen(!isOpen)}
					>
						{!isOpen ? <Menu size={25} /> : <X size={25} />}
					</button>
				</div>
			</nav>
			{/* Mobile Nav links */}
			{isOpen && (
				<ul className="absolute md:hidden flex flex-col gap-4 px-4 py-6 bg-zinc-50 dark:bg-zinc-950 w-full border-b border-gray-200 dark:border-zinc-900 items-center">
					{links.map((link) => {
						return (
							<Link 
								to={link !== "Home" ? link.toLowerCase() : "/"}
							>
								{link}
							</Link>
						);
					})}
				</ul>
			)}
		</header>
	);
};

export default Navbar;
