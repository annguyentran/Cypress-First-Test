/// <reference types="cypress" />


describe("alisas.invoke", () => {
    it.only("Validate A SPECIFIC HAIR CAIR PRODUCT", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        // Gets the list of the products and then extracts(invokes the method to get the text) the text and stores it in the 'productThumbnail' Using Alias is a shorter way to write it then the beforeEach method. We do not need to keep getting and invoking the text and validating it

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail');
        cy.get('@productThumbnail').its('length').should('be.gt', 18)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    });

    it('Validate the number of products on the homepage', () => {

        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail ').as('thumbnails');
        cy.get('@thumbnails').should('have.length', 16)
        cy.get('@thumbnails').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')


    })

    it.only('Validate the number of products on the homepage', () => {

        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail ').as('thumbnails');

        // Grab the all of the thumbnails and within the thumbnails, find the price tags so that the prices can be iterated, and not the thumbnails.

        // cy.get('@thumbnails').find('.oneprice').each(($el, index, $list) => {

        //     cy.log($el.text());

        //     })

        // Get the regular prices from the thumbnails and invoke the text command to store the text in the itemPrice property

        cy.get('@thumbnails').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('@thumbnails').find('.pricenew').invoke('text').as('saleItemPrice')


        // The price texts will be going into a for loop to check all of the prices
        var itemsPrice = 0

        cy.get('@itemPrice').then($linkText => {

        // Need to get all of the normal prices first and add them to the itemTotalPrice variable 
            var itemTotalPrice = 0

         // Spliting allows us to remove the dollar sign and keep the rest of the numbers 
            var itemPrice = $linkText.split('$');
            var i 
            for(i = 0; i < itemPrice.length; i++) {

                cy.log(itemPrice[i]);

            // As it loops around, the texts are being converted to numbers and added to the itemTotalPrice variable
                itemTotalPrice += Number(itemPrice[i]);
            }

        // The itemTotalPrice variable will then be added to the global variable which is itemsPrice
            itemsPrice += itemTotalPrice;
            cy.log('Total price of the non-sale items: ' + itemTotalPrice);
        })

    // Same process as above but this time with sale items 
        cy.get('@saleItemPrice').then($linkText => {

            var saleItemTotalPrice = 0
            var saleItemPrice = $linkText.split('$');
            var i 
            for(i = 0; i < saleItemPrice.length; i++) {

                saleItemTotalPrice += Number(saleItemPrice[i]);

                cy.log(saleItemPrice[i]);
            }

            // Add the sale items to the global variable 
            itemsPrice += saleItemTotalPrice;
            cy.log('Total price of the sale items: ' + saleItemTotalPrice);

        })
        .then(() => {

            // Log the prices for all of the normal and sale items 
            cy.log('Total price of the all products: ' + itemsPrice)
            expect(itemsPrice).to.equal(itemsPrice);
        })

    })

});