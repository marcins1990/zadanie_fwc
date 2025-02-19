class MensCategoryPage_PO {

    addProductToBasket(productName) {
        cy.get('.product-item-name').each(($el, index, $list) => {
            if ($el.text() === productName) {
                cy.log($el.text());
                cy.get("button[title='do koszyka']").eq(index).click()
            }
        })
    }


  
}

export default MensCategoryPage_PO;