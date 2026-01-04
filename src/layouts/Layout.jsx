import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
	return (
		<div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 dark:text-white flex flex-col">
			<Navbar />
			<Outlet />
		</div>
	);
};

export default Layout;
