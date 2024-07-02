describe('카운터 앱', () => {
	beforeEach(() => {
		// 현재 그룹핑된, describe안에서 모든 테스트 코드가 실행되기 전에 공통 로직을 실행하고 싶다면 여기에 추가하세요.
		cy.visit('http://localhost:3000');
	});
	// 첫 번쨰 테스트 시나리오
	it('페이지에 진입하면 카운터 앱이 정상적으로 실행 됨(0이 표시된다.)', () => {
		// <p>{counter}</p>
		cy.get('[data-cy=counter]').contains(0);
	});

	// Second Test
	it('플러스 버튼을 누르면 카운터 1이 증가한다.', () => {
		cy.get('[data-cy=add-button]').click();
		cy.get('[data-cy=counter]').contains(1);
	});

	it('마이너스 버튼을 누르면 카운터 1이 감소한다.', () => {
		cy.get('[data-cy=minus-button').click();
		cy.get('[data-cy=counter]').contains(-1);
	});
});
