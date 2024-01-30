/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
    before(function () {

        // Getting all of the products names in the fixture file through the fixture so that we can use it
      cy.fixture("products").then(function (data) {
        globalThis.data = data;
      });
    });
  
    beforeEach(function () {
      cy.visit("https://automationteststore.com/");
      cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    });
    it("Add specific items to basket", () => {

        //Iterate through each of the data in the fixture/products file and passing them through the custom function
        globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element)
        })
        // Click to see the cart contents
        cy.get('.dropdown-toggle > .fa').click();
    });
  });
  