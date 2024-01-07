
/// <reference types="Cypress" />

describe("Verify Autocomplete dropwdown lists via webdriveruni", () => {
    it("Select specific product via autocomplete list", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})

        // Type A in the text field to get the drop-down list 
        cy.get('#myInput').type('A')

        // Get that whole list and interate through each item in that list 
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {

            // Store elements that are being interated into the prod variable 
            const prod = $el.text();

            // Store the desired item in the variable
            const productToSelect = 'Avacado';

            // When nthe prod matches the desired item, then the element will be selected,submitted and then vertified
            if(prod === productToSelect) {
                // $el.click();
                $el.trigger('click');
                cy.get('#submit-button').click();
                cy.url().should('include', productToSelect)
            }
        }).then(()=>{

                cy.get('#myInput').type('G')
        
                cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
        
                    // Store elements that are being interated into the prod variable 
                    const prod = $el.text();
        
                    // Store the desired item in the variable
                    const productToSelect = 'Grapes';
        
                    // When nthe prod matches the desired item, then the element will be selected,submitted and then vertified
                    if(prod === productToSelect) {
                        //$el.click();
                        $el.trigger('click');

                        cy.get('#submit-button').click();
                        cy.url().should('include', productToSelect)
                    }
                })
        
            })
        })
    })
