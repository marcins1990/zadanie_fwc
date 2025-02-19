import HomePage_PO from "../../support/pageObjects/Homepage_PO";
import MensCategoryPage_PO from "../../support/pageObjects/MensCategoryPage_PO";
import CartPage_PO from "../../support/pageObjects/CartPage_PO";

/// <reference types="cypress" />
const homePage_PO = new HomePage_PO
const mensCategory_PO = new MensCategoryPage_PO;
const cartPage_PO = new CartPage_PO;

describe('Test logowania', () => {
    beforeEach(() => {
        cy.viewport(1600, 900);
        homePage_PO.visitHomepage();
    })

    it('Adding product to the cart, and verifing mini-cart', () => {
        homePage_PO.clickToMensCategory();

        let productName = "krem przeciw oznakom starzenia, 40 ml"
        let initialAmount;
        let updatedAmount;
        mensCategory_PO.addProductToBasket(productName);

        cy.wait(1000)
        homePage_PO.openMiniCart();
        homePage_PO.clickToProceedtoCartbutton();
      //  homePage_PO.clickToProceedtoCartbutton();
        cartPage_PO.closeModal();
        cartPage_PO.getCartTotalValue().then((initialAmount) => {
    
            cartPage_PO.changeQTY();
            cartPage_PO.clicktoUpdateButton();
            cartPage_PO.getCartUpdatedValue().then((updatedAmount) => {
                cartPage_PO.verifyCartTotal(initialAmount, updatedAmount);
            });
        });
        // cartPage_PO.changeQTY();
        // cartPage_PO.clicktoUpdateButton();

    });
});
