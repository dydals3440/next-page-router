import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:4000',
});

// 조회할떄 fetch라는 이름을 많이 씀.
function fetchProducts() {
	return instance.get('/products');
}

function fetchProducts2(productId) {
	return instance.get('/products', {
		params: {
			id: productId,
		},
	});
}

// 특정 상품 상세 정보를 조회하는 API 함수
function fetchProductById(id) {
	return instance.get(`/products/${id}`);
}

// 장바구니에 아이템을 추가하는 API 함수
// 객체로 감쌌을때는 파라미터의 순서를 안 선택해도됨, 정신건강에 좋음.
function createCartItem({ id, name, imageUrl, price }) {
	return instance.post('/carts', {
		id,
		name,
		imageUrl,
		price,
	});
}

// 장바구니 목록을 들고오는 API 함수
function fetchCarts() {
	return instance.get('/carts');
}

// 특정 아이디에 해당하는 장바구니 아이템을 삭제하는 API 함수
function removeCartItem(id) {
	return instance.delete(`/carts/${id}`);
}

export {
	fetchProducts,
	fetchProductById,
	createCartItem,
	fetchCarts,
	removeCartItem,
};
