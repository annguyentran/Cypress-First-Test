
describe("Cypress web security", () => {

    // Trying to visit two different superdomains in the same test will fail due to the cypress security features
    it.skip("Validate visiting two different domains", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.visit('https://www.google.com');
    });
// Visiting two different super domains is possible this way is the vy removing the web security on the browsers that test is being runned on in the config.js 

    it.skip("Validate visiting two different domains via user actions", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });

// The cypress command "origin" allows us bypass web security to visit different superdomains (The config.js still needs to be modified)
    it.only('Origin command', () => {
        cy.origin('https://www.webdriveruniversity.com',  () => {
            cy.visit("/");
        })

        cy.origin('https://www.automationteststore.com', () => {
            cy.visit("/");
        })

        //Same Origin Example:
        //cy.visit("https://www.webdriveruniversity.com");
        //cy.visit("https://selectors.webdriveruniversity.com");
    });
})