describe('상품 목록 페이지', () => {
	// 첫 번째 테스트 시나리오
	it('페이지에 진입하면 상품 목록이 표시된다. ', () => {
		// config 설정을 '/'로 했기에 됨!
		cy.visit('/');
		// should: 받아온 엘리먼트가 꼭 뭐가 되야함.
		// be.visible: cy.attribute를 가진 엘리먼트가 화면에 있을 것 이라고 가정.
		// cy.get('[data-cy=product-item]').should('be.visible');
		cy.getByCy('product-item').should('be.visible');
	});
});
