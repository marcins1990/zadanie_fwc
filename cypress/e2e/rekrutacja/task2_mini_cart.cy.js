import HomePage_PO from "../../support/pageObjects/Homepage_PO";
import MensCategoryPage_PO from "../../support/pageObjects/MensCategoryPage_PO";

/// <reference types="cypress" />
const homePage_PO = new HomePage_PO
const mensCategory_PO = new MensCategoryPage_PO;

describe('Test logowania', () => {
    beforeEach(() => {
     //   cy.viewport(1600, 900);
        homePage_PO.visitHomepage();
    })

    it('Adding product to the cart, and verifing mini-cart', () => {
        homePage_PO.clickToMensCategory();

        let productName = "krem przeciw oznakom starzenia, 40 ml"
    
        mensCategory_PO.addProductToBasket(productName)
        cy.wait(1000);
        homePage_PO.openMiniCart();

        homePage_PO.verifyMiniCartProduct(productName);
        
    });
});
