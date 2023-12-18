/// <reference types="Cypress" />


describe("Test contact us form via automation test store", () => {
    it("Should be able to submit a sucessful submission via contact us form", () => {
        "Cypress code"
        cy.visit('https://www.automationteststore.com/')
        cy.xpath('//a[contains(@href, "contact")]').click();
        cy.get('#ContactUsFrm_first_name').type("Andrew");
        cy.get('#ContactUsFrm_first_name').should('have.attr', 'name', 'first_name');
        cy.get('#ContactUsFrm_email').type('andrew@gmail.com');
        cy.get('#ContactUsFrm_enquiry').type('Testing');
        cy.get("button[title='Submit']").click();
        cy.xpath("//p[contains(text(),'enquiry')]").should('have.text', 'Your enquiry has been successfully sent to the store owner!');

    })

   
});