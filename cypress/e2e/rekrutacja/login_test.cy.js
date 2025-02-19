import HomePage_PO from "../../support/pageObjects/Homepage_PO";
import Login_Page_PO from "../../support/pageObjects/LoginPage_PO";
/// <reference types="cypress" />
const homePage_PO = new HomePage_PO
const loginPage_PO = new Login_Page_PO

describe('Login test', () => {
  beforeEach(() => {

    homePage_PO.visitHomepage();
    homePage_PO.loadFixturesFile();

  })

  it('Loggin to accoun using correct credentials', () => {
    homePage_PO.clickToLoginIcon();
    loginPage_PO.fillUpAndSubmitLoginForm();

  });
});
