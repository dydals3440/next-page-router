import ProductList from '@/components/ProductList';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ProductPage() {
	return (
		<div>
			<h1>상품 목록 페이지!</h1>
			<ProductList />
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
