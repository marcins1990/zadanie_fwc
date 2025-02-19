class CartPage_PO {

    closeModal() {
        cy.get('body').then(($body) => {
            if ($body.find('.modal-popup > .modal-inner-wrap > .modal-header').length > 0) { // Sprawdza, czy modal istnieje w DOM
                cy.get('.modal-popup > .modal-inner-wrap > .modal-header', { timeout: 10000 }).should('be.visible'); // Czeka na pojawienie się popupu
                cy.get('.modal-popup > .modal-inner-wrap > .modal-header > .action-close').click(); // Kliknięcie w przycisk zamknięcia (X)
                cy.get('.modal-popup > .modal-inner-wrap > .modal-header').should('not.be.visible'); // Sprawdza, czy popup zniknął
            }
        });

    }



    getCartTotalValue() {
        return cy.get('tr.grand.totals .amount .price')
            .invoke('text')
            .then((text) => {
                const initialAmount = parseFloat(text.replace('zł', '').trim().replace(',', '.'));
                cy.log(`Początkowa suma do zapłaty: ${initialAmount}`);
                return cy.wrap(initialAmount);
            });
    }

    getCartUpdatedValue() {
        return cy.get('tr.grand.totals .amount .price')
            .invoke('text')
            .then((text) => {
                const updatedAmount = parseFloat(text.replace('zł', '').trim().replace(',', '.'));
                cy.log(`Zaktualizowana suma do zapłaty: ${updatedAmount}`);
                return cy.wrap(updatedAmount);
            });
    }

    verifyCartTotal(initialAmount, updatedAmount) {
        cy.log(`Porównujemy wartości: Initial = ${initialAmount}, Updated = ${updatedAmount}`);
        expect(updatedAmount).to.be.greaterThan(initialAmount);
    }


    changeQTY() {
        cy.get('.qty-increase').click();
    }

    clicktoUpdateButton() {
        cy.get('.actions-toolbar > .update-cart-item').click();
    }
}

export default CartPage_PO

