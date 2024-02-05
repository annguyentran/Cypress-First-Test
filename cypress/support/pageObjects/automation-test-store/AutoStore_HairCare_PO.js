class AutoStore_HairCare_Po {
    addHairCareProductsToBasket() {
        //Iterate through each of the data in the fixture/products file and passing them through the custom function
        globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element).then(() => {

                //debugger
            })
        })
        // Click to see the cart contents
        cy.get('.dropdown-toggle > .fa').click().debug();
    }
}
export default AutoStore_HairCare_Po;