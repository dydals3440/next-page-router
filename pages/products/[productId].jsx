// 파일 이름이 대괄호로 묶여있으면 동적 라우팅
import { fetchProductById } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import ProductInfo from '@/components/product-detail/ProductInfo';

import React, { useState } from 'react';

export default function ProductDetailPage({ productDetail }) {
	const headerTitle = '상품 상세 정보 페이지';
	const [value, setValue] = useState('');
	const [isEdit, setIsEdit] = useState(false);

	const handleChangeValue = e => {
		setValue(e.target.value);
	};
	return (
		<div>
			{/* props 페이지 컴포넌트도, 리액트임, 리액트에서 파라미터의 디스트럭쳐링을 이용해서, 첫번쨰로 들어오는 값은 Props이다 이것을 */}
			<ProductHeader title={headerTitle} />
			{isEdit ? (
				<input value={value} onChange={handleChangeValue} />
			) : (
				<h1>{value}</h1>
			)}
			<button onClick={() => setIsEdit(prev => !prev)}>
				{isEdit ? '완료' : '수정'}
			</button>
			{/* <ProductInfo productDetail={productDetail} /> */}
		</div>
	);
}

// router.push는 페이지 정보를 기록 (뒤로가기하면 페이지 돌아갈 수 있음)
// router.replace 페이지 정보 기록 X 갱신만.

// 페이지를 그리지 전에 데이터를 받아옴.
export async function getServerSideProps(context) {
	// /products/15
	const id = context.params.productId;
	console.log(id);
	const { data } = await fetchProductById(id);

	return {
		// props는 서버에서 보내준 message랑 엮어서 들어간다고 보면됨.
		props: {
			productDetail: data,
		},
	};
}
