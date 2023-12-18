/// <reference types="Cypress" />

describe("Test contact us form via WebdriverUni", () => {
    it("Should be able to submit a sucessful submission via contact us form", () => {
        "Cypress code"
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get('#contact-us').click();
        cy.get('[name="first_name"]').type('Andrew');
        cy.get('[name="last_name"]').type('N');
        cy.get('[name="email"]').type('andrew.noreply@gmail.com');
        cy.get('textarea.feedback-input').type('Text');
        cy.get('[type="submit"]').click();
    })

    it.only("Should not be able to submit a sucessful submission via contact us form as all fields are required", () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type('Andrew');
        cy.get('[name="last_name"]').type('N');
        ///cy.get('[name="email"]').type('andrew.noreply@gmail.com');
        cy.get('textarea.feedback-input').type('Text');
        cy.get('[type="submit"]').click();    })
});