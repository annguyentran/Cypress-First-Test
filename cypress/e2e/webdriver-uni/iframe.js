

// Cypress do not automatically handle iframes so this is a workaround to that limitation. iframes are Html DOM elements within a DOM element
describe("Handling IFrame & Modals", () => {
    it("Handle webdriveruni iframe and modal", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})

        // Locating the iframe element to get the HTML body of that iframe. Wrapping that body so we can do cypress commands. (Using jQuery to warp the body)
        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')

            // creating an alias
            cy.wrap(body).as('iframe')
        })


        // Locating elements within the iframe of the body 
        cy.get('@iframe').find('#button-find-out-more').click()

        // locating the text alert element and giving an alias

        cy.get('@iframe').find('#myModal').as('modal')

        // Validating the text within the iframe within the modal element
        cy.get('@modal').should(($expectedText) => {

            // Storing the text in a variable and then validating
            const text = $expectedText.text()
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods');
        })

        cy.get('@modal').contains('Close').click()
    });
})