
describe("Handle js alerts", () => {
    it("Confirm js alert contains the correct text", () => {
        //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })

        cy.get('#button1').click()

        // Directly interact with the alert element so that we can validate it. Cypress automatically handles it for us otherwise
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    });
    it("Validate js confirm alert box works correctly when clicking ok", () => {
        //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })

        cy.get('#button4').click()

        // window:alert will automatically accept an alert
        cy.on('window:alert', (str) => {

            // Cypress will click on the 'ok' button 
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    });

    it.only("Validate js confirm alert box works correctly when clicking cancel", () => {
        //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })

        cy.get('#button4').click()

        // Confirms allows us to choose
        cy.on('window:confirm', (str) => {

            // Cypress will click on the 'cancel' button 
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });
})