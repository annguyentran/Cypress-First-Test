
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

    it("Validate js confirm alert box works correctly when clicking cancel", () => {
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

    it("Validate js confirm alert box using a stub", () => {
        //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        // Stubs records the result of the window alert 
        const stub = cy.stub()
        cy.on('window:confirm', stub)

        cy.get('#button4').click().then(() => {
            // Valdiate the value in that 1 stub 
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    });
})