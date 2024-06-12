import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ProductList.module.css';

function ProductList() {
	const [products, setProducts] = useState([]);

	// 컴포넌트가 렌더링 되자마자, 실행될 로직들, 리액트 바깥에 있는 상태와, 리액트 안에 있는 상태를 동기화할 때, useEffect를 많이 사용.
	// 서버에 있는 데이터를 불러와서, 화면에 그리기 위한 상태로, 연결하기 해서 useEffect를 사용했다고 보면됨
	useEffect(() => {
		axios.get('http://localhost:4000/products').then(response => {
			setProducts(response.data);
		});
	}, []);
	return (
		<ul>
			{products &&
				products.map(product => {
					return (
						<li key={product.id} className={styles.item}>
							<div>
								<Image
									src={product.imageUrl}
									alt={product.name}
									width={300}
									height={250}
								/>
							</div>
							<div>{product.name}</div>
						</li>
					);
				})}
		</ul>
	);
}

export default ProductList;
