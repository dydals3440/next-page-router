import Image from 'next/image';
import styles from './CartList.module.css';
import { removeCartItem } from '@/api';
import { useRouter } from 'next/router';
import axios from 'axios';

// map() 기존에 있는 배열을 변형해서 만들어주는게 map
// [1, 2, 3]
// [10, 20, 30]

// reduce()
// [1, 2, 3]
// 6

export default function CartList({ carts }) {
	const router = useRouter();
	const totalPrice = carts.reduce((acc, cur) => {
		// acc:  cur: cart 현재순회하는 각각의 아이템이 됨.
		// 문자열이 더해지므로, parseFloat으로 문자열을 부동소수점으로 바꿔줌.
		return acc + parseFloat(cur.price);
	}, 0);

	// let total;
	// carts.forEach(cart => {
	// 	total = total + cart.price;
	// });

	const removeCart = async id => {
		// 1. 삭제 API 호출
		// const { data } = await removeCartItem(id);
		const { data } = await axios.post('http://localhost:3000/api/carts', {
			id,
		});
		alert(data);
		// 2. 상품 목록을 갱신
		// replace하고, 현재 컴포넌트가 뿌려진 URL '/cart'로 브라우저 주소를 바꿔치기 함.
		// replace: 브라우저 주소 바꿔치기(이동도 되고, 이동한 흔적을 안남김) push: 해당페이지로 이동
		router.replace(router.asPath);
	};

	return (
		<>
			<div>
				<ul>
					{carts.map(cart => {
						return (
							<li key={cart.id} className={styles.item}>
								<div>
									<Image
										src={cart.imageUrl}
										width={50}
										height={50}
										alt={cart.name}
									/>
								</div>
								<div className={styles.description}>
									<div>{cart.name}</div>
									<div>{cart.price}</div>
									{/* remove(cart.id)만 하게되면 그냥 실행하고 끝나는거임. 이벤트 핸들러까지 전달되지 않음*/}
									{/* 실질적으로, removeCart라는 eventHandler에 값이 전달 안됨. */}
									{/* onClick을 실행헀을떄, id를 전달하게끔 할려면 화살표 함수로 넘겨야함. */}
									{/* 함수의 참조를 넘긴다함 : 리액트 공식문서 매우 강조! */}
									<button onClick={() => removeCart(cart.id)}>삭제하기</button>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div>
				<p>총 가격 : {totalPrice}</p>
				<p>총 수량 : {carts.length}</p>
			</div>
		</>
	);
}
