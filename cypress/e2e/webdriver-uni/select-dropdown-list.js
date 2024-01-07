
describe("Interact with dropdown lists via webdriveruni", () => {
    it("Select specific values via select dropdown lists", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        // Selecting the downdown menus

        cy.get('#dropdowm-menu-1').select('c#')

        // Valdiating based on the value 
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')

        // Valdating whetever the text contains what is required. 
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')

        //Validate bases on its value
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')

        //Validate based on what the HTML is
        cy.get('#dropdowm-menu-2').select('testng').contains('TestNG')


    });
})