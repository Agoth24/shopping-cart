import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Layout = () => {
	return (
		<div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 dark:text-white flex flex-col">
			<Navbar />
			<main className="flex-1 flex">
                <Outlet />
            </main>
            <Footer />
		</div>
	);
};

export default Layout;
