/// <reference types="Cypress" />

describe("Test contact us form via WebdriverUni", () => {
    it.only("Should be able to submit a sucessful submission via contact us form", () => {
        "Cypress code"
        // Visit the homepage
       // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

       // Visiting the homepage and going to the contact page on the same tab by removing an attribute
        cy.visit("https://www.webdriveruniversity.com")
        cy.get("#contact-us").invoke("removeAttr", "target").click();

        // Checking if the homepage has the same title as expected
        cy.document().should("have.property", 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver')

        // Checking if the url matches the expected
        cy.url().should('include', 'https://www.webdriveruniversity.')

        // Filling out forms 
        cy.get('[name="first_name"]').type('Andrew');
        cy.get('[name="last_name"]').type('N');
        cy.get('[name="email"]').type('andrew.noreply@gmail.com');
        cy.get('textarea.feedback-input').type('Text');
        cy.get('[type="submit"]').click();
        cy.get('h1').should("have.text","Thank You for your Message!");

    })

    it("Should not be able to submit a sucessful submission via contact us form as all fields are required", () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type('Andrew');
        cy.get('[name="last_name"]').type('n');
        cy.get('[name="email"]').type('test');
        cy.get('textarea.feedback-input').type('Text');
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error')

    })
});