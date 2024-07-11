describe('상품 목록 페이지', () => {
	beforeEach(() => {
		// cypress.config 설정
		cy.visit('/');
	});
	// 첫 번째 테스트 시나리오.
	it('페이지에 진입하면 상품 목록이 표시된다. ', () => {
		// should: 받아온 엘리먼트가 꼭 뭐가 되야함.
		// be.visible: cy.attribute를 가진 엘리먼트가 화면에 있을 것 이라고 가정.
		// cy.get('[data-cy=product-item]').should('be.visible');
		cy.getByCy('product-item').should('be.visible');
	});
	// 두 번쨰 테스트 시나리오.
	it('네비게이션바의 장바구니 링크를 클릭하면 장바구니 페이지로 이동합니다.', () => {
		// action => 사용자 관점의 interaction
		cy.getByCy('cart-link').click();

		// assertion (우리가 기대하는 것이, 실제와 동일한지 판단)
		// 현재 페이지의 url을 뱉음. => 보장.
		cy.url().should('include', '/cart');
		cy.getByCy('cart-header').should('be.visible');
	});

	// 세 번째 테스트 시나리오
	it('상품 목록의 아이템을 클릭하면, 상품 상세 페이지로 이동한다.', () => {
		// 1. prepare
		// cy.visit('/')

		// 2. action
		// product-item이라고하면 30개 다 담아옴 .first로 첫번쨰 돔 엘리먼트만 찾음.
		// 30개 상품중 1개만 찾고 클릭.
		cy.getByCy('product-item').first().click();

		// 3. assertion
		cy.url().should('include', '/products/');
	});
});
