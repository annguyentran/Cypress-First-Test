/// <reference types="cypress" />
import AutoStore_Homepage_Po from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";
import AutoStore_HairCare_Po from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";

describe("Add multiple items to basket", () => {

  const autoStore_Homepage_Po = new AutoStore_Homepage_Po
  const autoStore_HairCare_Po = new AutoStore_HairCare_Po

    before(function () {

        // Getting all of the products names in the fixture file through the fixture so that we can use it
      cy.fixture("products").then(function (data) {
        globalThis.data = data;
      });
    });
  
    beforeEach(function () {
      // cy.visit("https://automationteststore.com/");
      // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

      // From the page object model that will access the homepage and click on the haircare link
      autoStore_Homepage_Po.accessHomepage();
      autoStore_Homepage_Po.clickOn_HairCare_Link();
    });
    it("Add specific items to basket", () => {

       autoStore_HairCare_Po.addHairCareProductsToBasket();
    });
  });
  