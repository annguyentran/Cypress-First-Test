/// <reference types="Cypress" />


describe("Test contact us form via automation test store", () => {
    it("Should be able to submit a sucessful submission via contact us form", () => {
        "Cypress code"

        // Visiting the automation test store
        cy.visit('https://www.automationteststore.com/')

        //Getting the contact form by using the xpath format and console/cy logging the information using a promise. We can control the order of excution with promises using Cypress or noncypress commands.
        cy.xpath('//a[contains(@href, "contact")]').click().then((contactText) => {

            console.log(contactText.text());
            cy.log(contactText.text());

        })

        // Getting the elements and filling the contact form
        cy.get('#ContactUsFrm_first_name').type("Andrew")
        cy.get('#ContactUsFrm_first_name').should('have.attr', 'name', 'first_name');
        cy.get('#ContactUsFrm_email').type('andrew@gmail.com');
        cy.get('#ContactUsFrm_enquiry').type('Testing');
        cy.get("button[title='Submit']").click();

        // Adding an assertion command to check if the text displays as expected
        cy.xpath("//p[contains(text(),'enquiry')]").should('have.text', 'Your enquiry has been successfully sent to the store owner!');

    })


});