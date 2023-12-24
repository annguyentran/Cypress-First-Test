


describe("Iterate over elements", () => {
    it("Log information of all hair care products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        // Get all of the elements of the hair care in the list and each item in the list will be iterated.

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {

            // Log the index and the element text in the cypress logs over each iteration.

            cy.log("Index: " + index + " :: " + $el.text());

        })
    });
    it("Add specific product to basket", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {

        if($el.text().includes('Curls to straight Shampoo')) {
            
            // warps allows us to use cypress commands on elements like .click() instead of using jquery methods 

            cy.warp($el).click();
        }
            
        })
    });
});
