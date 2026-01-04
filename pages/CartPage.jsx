import useBooksFetcher from "../hooks/useBooksFetcher";

const CartPage = () => {
    return (
        <section className="p-8">
            {useBooksFetcher()}
			<h1 className="text-3xl font-bold">Cart Page</h1>
		</section>
	);
};

export default CartPage;
