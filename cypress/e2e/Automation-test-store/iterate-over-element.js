
/// <reference types="cypress" />


describe("Iterate over elements", () => {

    beforeEach(() => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();


    })
    it("Log information of all hair care products", () => {

        // Get all of the elements of the hair care in the list and each item in the list will be iterated.

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {

            // Log the index and the element text in the cypress logs over each iteration.

            cy.log("Index: " + index + " :: " + $el.text());

        })
    });
    it("Add specific product to basket", () => {
       
        // Uses the custom-command from the support file to reduce code
        cy.selectProduct('Seaweed Conditioner')
    });

    it("Add specific product to basket 2", () => {
        
        // Uses the custom-command from the support file to reduce code
        cy.selectProduct('Eau Parfumee au The Vert Shampoo')
    });
});
