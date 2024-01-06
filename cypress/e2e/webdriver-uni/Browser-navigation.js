
describe('Validate webdriveruni homepage links', () => {
    it("Should be able to submit a sucessful submission via contact us form", () => {
        "Cypress code"
        // Visit the homepage
       // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

       // Visiting the homepage and going to the contact page on the same tab by removing an attribute
        cy.visit("https://www.webdriveruniversity.com")
        cy.get("#contact-us").invoke("removeAttr", "target").click();
        
        // Checking if we arrived at the url first 
        cy.url().should('include', 'Contact-Us')

        // Going back a webpage 
        cy.go('back');
        // Reloading page
        cy.reload();
        // cy.reload(); // reload without using cache

        // Going forward
        cy.go('forward');
        cy.url().should('include', 'Contact-Us')

        cy.go('back');
        cy.url().should('equal', 'https://www.webdriveruniversity.com/')

        cy.get('#login-portal').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'Login-Portal');


    })
    it.only("Should be able to click and validate the to-do list form", () => {

       // Visiting the homepage and going to the contact page on the same tab by removing an attribute
        cy.visit("https://www.webdriveruniversity.com")
        
        cy.get('#to-do-list').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'To-Do-List')

        cy.go('back')
        


    })


})