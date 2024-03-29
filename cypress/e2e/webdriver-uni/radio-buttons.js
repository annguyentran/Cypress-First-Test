
describe("Selecting and unselecting radio buttons ", () => {

    beforeEach(() => {

        // Custom command to navigate to the desired page
       cy.navigateTo_WebdriverUni_Checkbox_Page();

    })
    it("Get and check one button at a time", () => {
        

        // Getting and finding the radio buttons 
        // cy.get('#radio-buttons').find("[type='radio']").first().check()
        // cy.get('#radio-buttons').find("[type='radio']").eq(1).check()

        // Getting and finding the radio buttons but using aliases
        cy.get('#radio-buttons').find('input[type="radio"]').as('radioButtons') 
        cy.get('@radioButtons').eq(0).check().should('to.be.checked')

    });

    it("Validating checkboxes", () => {
        

        // Checking and validating the radio buttons 
        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')

        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should('be.checked')
        cy.get("[value='pumpkin']").should('not.be.checked')

        // Validating when the radio button is not clickable (disabled)
        cy.get("[value='cabbage']").should('be.disabled')

    });
})