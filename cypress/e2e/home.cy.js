// cy.js (cypress의 약자)
describe('홈페이지 테스트 코드', () => {
	it('"/"로 진입하면, 페이지가 정상적으로 표시된다.', () => {
		cy.visit('http://localhost:3000/');
	});
});
