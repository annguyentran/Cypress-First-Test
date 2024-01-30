/// <reference types="Cypress" />

describe("Test contact us form via WebdriverUni", () => {

    before(() => {
        cy.fixture('example').then((data)=> {


            //this.details = data; // depending on the context where it is being used (function or browser)
            
            globalThis.details = data // Can be accessed/used globally whetever the data is being accessed in a different enviroment (browsers, node.js,etc.) 

        })
    })
    it("Should be able to submit a sucessful submission via contact us form", () => {

    
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
        // cy.get('[name="first_name"]').type(details.first_name);
        // cy.get('[name="last_name"]').type(details.last_name);
        // cy.get('[name="email"]').type(details.email);
        // cy.get('textarea.feedback-input').type('Text');
        // cy.get('[type="submit"]').click();
        // cy.get('h1').should("have.text","Thank You for your Message!");

      // Custom command where we populate the fields using data from our fixture 
        cy.webdriverUni_ContactForm_Submission(details.first_name, details.last_name, details.email, "How can I learn Cypress?", 'h1', 'Thank You for your Message!');


    })

    it("Should not be able to submit a sucessful submission via contact us form as all fields are required", () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        // cy.get('[name="first_name"]').type(details.first_name);
        // cy.get('[name="last_name"]').type('n');
        // cy.get('[name="email"]').type('test');
        // cy.get('textarea.feedback-input').type('Text');
        // cy.get('[type="submit"]').click();
        // cy.get('body').contains('Error')

        // Custom command where we populate the fields using data from our fixture 
        cy.webdriverUni_ContactForm_Submission(details.first_name, details.last_name, " ", "How can I learn Cypress?", 'body', 'Error: Invalid email address');



    })
});