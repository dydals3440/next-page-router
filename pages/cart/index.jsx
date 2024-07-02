import { fetchCarts } from '@/api';
import CartHeader from '@/components/cart/CartHeader';
import CartList from '@/components/cart/CartList';

function CartPage({ carts }) {
	return (
		<div>
			<CartHeader />
			<CartList carts={carts} />
		</div>
	);
}

export async function getServerSideProps(context) {
	const { data } = await fetchCarts();

	return {
		props: {
			carts: data,
		},
	};
}

export default CartPage;
