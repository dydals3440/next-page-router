import ProductHeader from '@/components/ProductHeader';
import ProductList from '@/components/product-list/ProductList';
import { useState } from 'react';

function Counter() {
	const [counter, setCounter] = useState(0);
	const increaseCounter = () => {
		setCounter(prev => prev + 1);
	};
	const decreaseCounter = () => {
		setCounter(prev => prev - 1);
	};
	return (
		<div>
			{/* id='counter'가 아닌, test용 아이디를 줌 data-cy="counter" */}
			<p data-cy="counter">{counter}</p>
			<button data-cy="add-button" onClick={increaseCounter}>
				+
			</button>
			<button data-cy="minus-button" onClick={decreaseCounter}>
				-
			</button>
		</div>
	);
}

// 'http://localhost:3000/'에 해당하는 페이지 컴포넌트
function ProductPage() {
	const headerTitle = '상품 목록 페이지';

	return (
		<div>
			<ProductHeader title={headerTitle} />
			<Counter />
			{/* <ProductList /> */}
		</div>
	);
}

export default ProductPage;

// 'localhost:3000/' (index)

/**
 * 1. 상품 목록 페이지 - '/'
 * 2. 상품 상세 페이지 - '/products/productId'
 * 3. 장바구니 페이지 - '/carts'
 */
