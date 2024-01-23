
describe("Verify checkboxes via webdriveruni", () => {

    beforeEach(() => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

    })
    it("Check and validate checkbox", () => {


        // These are ways we can check the boxes and validate them 
        //cy.get('#checkboxes > :nth-child(1) > input').check()
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

        // This checks the boxes and validates by using alias 
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        //cy.get('@option-1').check();
        cy.get('@option-1').check().should('be.checked')
    });

    it("Uncheck and validate the checkbox to see when it is not checked", () => {
       

        cy.xpath("//input[@value='option-3']").as('option-3')
        // Not safe to chain commands with uncheck or check 
        cy.get('@option-3').uncheck()
        cy.get('@option-3').should('be.not.checked')

    });

    it("check all of the boxes", () => {
        

        cy.xpath("//input[@value='option-3']").as('option-3')
        // Not safe to chain commands with uncheck or check 
        cy.get('@option-3').uncheck()
        cy.get('@option-3').should('be.not.checked')

        // checks all of the box automatically. Specific checks require there be a value in the paratheses like 'option-1
        cy.get("input[type='checkbox']").check().should('be.checked');



    });
})