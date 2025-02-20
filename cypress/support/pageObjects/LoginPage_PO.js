class Login_Page_PO{

fillUpAndSubmitLoginForm(){
    cy.get("#email").type(data.username);
    cy.get("input[name='login[password]']").type(data.password);
    cy.get(".login-container button").click();
    
}

    verifyIfLogged(selector, timeout = 10000) {
       cy.get('.panel > :nth-child(2) > .customer-welcome > .customer-name').invoke('show').trigger('mouseover', { force: true })

       //   cy.get('.panel > :nth-child(2) > .customer-welcome > .customer-name').click
          cy.get('a[href*="https://tolpa.pl/sales/order/history/"]', {timeout}).should('be.visible')


    }


}
export default Login_Page_PO;