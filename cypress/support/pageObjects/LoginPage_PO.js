class Login_Page_PO{

fillUpAndSubmitLoginForm(){
    cy.get("#email").type(data.username);
    cy.get("input[name='login[password]']").type(data.password);
    cy.get(".login-container button").click();
    cy.get('.panel > :nth-child(2) > .customer-welcome > .customer-name').trigger('mouseover')
  //  cy.get('a[href*="https://tolpa.pl/sales/order/history/"]').should('be.visible')
    
}

    waitForElementToBeVisible(selector, timeout = 5000) {
        cy.get(a[href*="https://tolpa.pl/sales/order/history/"], { timeout }).should('be.visible');
    }


}
export default Login_Page_PO;