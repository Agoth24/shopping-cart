import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import CartPage from "../pages/CartPage";
import Layout from "./layouts/Layout";
import NotFoundPage from "../pages/NotFoundPage";

const routes = [
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "shop", element: <ShopPage /> },
			{ path: "cart", element: <CartPage /> },
		],
	},
];

export default routes;
