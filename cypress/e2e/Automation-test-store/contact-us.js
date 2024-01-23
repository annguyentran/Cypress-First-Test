/// <reference types="Cypress" />


describe("Test contact us form via automation test store", () => {
/// Using the before hook
    before(() => {

        // Find the details of the json file and name it as an alias
        cy.fixture('userDetails').as('user')

    });
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

        // call the fixture with the alias and pass that information through the function as user.
        cy.get('@user').then((user) => {

            // Get the textbox element and use the information that has been passed through to type the information in the textbox
            cy.get('#ContactUsFrm_first_name').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email);

        })
        cy.get('#ContactUsFrm_first_name').should('have.attr', 'name', 'first_name');
        cy.get('#ContactUsFrm_enquiry').type('Testing');
        cy.get("button[title='Submit']").click();

        // Adding an assertion command to check if the text displays as expected
        cy.xpath("//p[contains(text(),'enquiry')]").should('have.text', 'Your enquiry has been successfully sent to the store owner!');

    })


});