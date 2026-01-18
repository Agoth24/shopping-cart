import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Layout = () => {
	const [addedBooks, setAddedBooks] = useState([]);
	return (
		<div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 dark:text-white flex flex-col">
			<Navbar />
			<main className="flex flex-1">
				<div className="w-full">
					<Outlet context={{ addedBooks, setAddedBooks }} />
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
