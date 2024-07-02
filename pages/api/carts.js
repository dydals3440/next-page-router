import { removeCartItem } from '@/api';

// http://localhost:3000/api/carts => 프론트 서버가 서버인척 함
export default async function handler(req, res) {
	const id = req.body.id;
	console.log('#id', id);
	// db.remove(); 직접 디비 접근해서 할 수 있음.
	const { data } = await removeCartItem(id);

	res.status(200).send(`${data.name} 삭제가 되었습니다.`);
}
