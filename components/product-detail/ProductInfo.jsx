import Image from 'next/image';
import styles from './ProductInfo.module.css';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

// export default function ProductInfo({ productDetail }:{id,name})

export default function ProductInfo({ productDetail }) {
	const router = useRouter();
	const { id, name, imageUrl, price } = productDetail;
	// 함수 선언문
	// function addCart () {}

	// 함수 표현식
	const addCart = async () => {
		// 1. 장바구니에 아이템을 담는 API 함수 호출

		// 이렇게 쓰면 순서를 알아야함. 잘못된 순서가 들어오면 에러가 발생
		// 객체로 감싸는걸 추천함. 파라미터 순서를 안해도됨. 객체는 순서가 없기 떄문.
		// 굳이 이렇게 안해도 되고
		// const response = await createCartItem({ id, name, imageUrl, price });
		// 그냥 productDetail 통으로 던지고, 그 안에있는걸 이제 api 함수에서 알아서 디스트럭쳐링 할꺼임.
		const response = await createCartItem(productDetail);
		// 2. 장바구니 페이지로 이동
		console.log(response);
		alert('장바구니에 추가됨!');
		router.push('/cart');
	};

	return (
		<div className={styles.container}>
			<div>
				<Image
					data-cy="product-image"
					src={imageUrl}
					alt={name}
					width={250}
					height={250}
				/>
			</div>
			<div className={styles.description}>
				<p data-cy="product-name">{name}</p>
				<p data-cy="product-price">{price}</p>
				<button data-cy="cart-button" onClick={addCart}>
					장바구니에 담기!
				</button>
			</div>
		</div>
	);
}
