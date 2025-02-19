class HomePage_PO {

    visitHomepage() {
        cy.visit(Cypress.env("baseUrl"));
    }

    loadFixturesFile() {
        cy.fixture('login_data.json').then(function (data) {
            globalThis.data = data;
        });
    }

    clickToLoginIcon() {
        cy.get('.panel > .header > .authorization-link > a').click();
    }

    clickToMensCategory(){
      //  cy.get('#ui-id-3 > :nth-child(2)').click();
      cy.get(" [href='https://tolpa.pl/mezczyzna.html'][role='menuitem']").click();

       

    }

    openMiniCart(){
        cy.get('.minicart-wrapper > .action.showcart').then($el => {
            cy.wrap($el).invoke('removeAttr', 'href'); 
            cy.wrap($el).click();
        });
    }

    openCart(){
        cy.get('.showcart').click();
    }

    clickToProceedtoCartbutton(){
        cy.get('.action.viewcart').click();
    }

    verifyMiniCartProduct(productName){
        cy.get('.product-item-name > a').should('have.text', productName);

    }
}

export default HomePage_PO;