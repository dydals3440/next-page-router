import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ProductList.module.css';
import Link from 'next/link';
import { fetchProducts } from '@/api';

function ProductList() {
	const [products, setProducts] = useState([]);

	// 컴포넌트가 렌더링 되자마자, 실행될 로직들, 리액트 바깥에 있는 상태와, 리액트 안에 있는 상태를 동기화할 때, useEffect를 많이 사용.
	// 서버에 있는 데이터를 불러와서, 화면에 그리기 위한 상태로, 연결하기 해서 useEffect를 사용했다고 보면됨

	// 컴포넌트가 UI에 그려지자마자, useEffect로직을 실행 데이터를 받아오는 로직 추가.
	useEffect(() => {
		fetchProducts().then(response => {
			setProducts(response.data);
		});
	}, []);
	return (
		<ul>
			{products &&
				products.map(product => {
					return (
						<li data-cy="product-item" key={product.id} className={styles.item}>
							{/* href에 중괄호로 자스를 넣게, 백틱으로 자스 문자열을 넣게 */}
							<Link href={`/products/${product.id}`}>
								<div>
									<Image
										src={product.imageUrl}
										width={300}
										height={200}
										alt={product.name}
									/>
								</div>
								<div>{product.name}</div>
							</Link>
						</li>
					);
				})}
		</ul>
	);
}

export default ProductList;
