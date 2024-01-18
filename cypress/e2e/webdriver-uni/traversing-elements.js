/// <reference types="Cypress" />
describe("Traversing DOM elements in Cypress", () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
    it("children() to get the children of DOM elements", () => {
        // Get the class element and use the children command to locate all the children of that class element. Then in the parentheses, type the attribute to get the specific child element and validate that it got the correct one. 
        cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Contact Us')});

    it("closest() to validate the closest ancestor DOM element", () => {
        // From that element, cypress will look for the closest ancestor with that attribute
        cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group')

    });

    it("eq() to retrieve a specific element based on index", () => {
        // Get the index of elements and locating a specific element within that index
        cy.get('.traversal-drinks-list > *').eq(2).should('contain', 'Milk')

    });

    it("filter() to retrieve DOM elements that match a specific selector", () => {
        // Getting a list of elements and locating a specific element by using an attribute selector and validating it. 
        cy.get('.btn-group-toggle > *').filter('.active').should('contain', 'Button-1')


    });

    it("find() to retrieve DOM elements of a given selector", () => {
        //Locate the element with tha .traversal-pagination class, within that tag, find all the elements with the li tags and within those li tags, find all the elements with the a tag and validate
        cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7)

    });

    it("first() to retrieve the first DOM element within elements ", () => {
        // The selector here keeps finding elements within elements. Find the first DOM element within the list of elements. tbody is the whole table. tr are the rows of that table. td tag of the names only
        cy.get('.traversal-table > tbody > tr > td').first().should('contain', 'Andy')

    });

    it("last() to retrieve the last DOM element within elements", () => {
        // Find the last element of the list of elements
        cy.get('.traversal-table > tbody > tr > td').last().should('contain', 'Scott')

    });

    it("nextAll() to get all of the next sibling DOM elements within elements", () => {
        // Get the element "Tea" and find all the sibling elements down the DOM page and it does not include up the DOM page
        cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length', '3')

    });

    it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
        // Starting with the coffee in the list item, keep locating the elements until the milk ID has been reached. Does not include the element which is the coffee id that is starting with nor the one that it ends with which is the milk ID
        cy.get('#coffee').nextUntil('#milk').should('have.length', '1')
    });

    it("not() to remove DOM element(s) from the set of elements", () => {

        // Find all the buttons except for the one that we do not want so we put the class in the not command to tell it that we do not want that particular class
        cy.get('.traversal-button-states > button').not('.disabled').should('not.have.class', 'disabled')

    });

    it("parent() To get parent DOM element of elements", () => {

        // locate the element first and then get the parent element which is 1 tag above the element that was located 

        cy.get('.traversal-mark').parent().should('contain', 'Lorem ipsum dolor sit amet')

    });

    it("parents() to get parents DOM element of elements", () => {

        // Locate the element and then get all the parents related to that element and then valdiate if that element has that specific element. The 'match' element will see if that element has that specific selector as a parent 
        cy.get('.traversal-cite').parents().should('match', 'blockquote')

    });

    it("prev() to get the previous sibling DOM element within elements", () => {
        // Locate the element and get the previous sibling DOM element and do an assertion to make sure it got the 1 element before it
        cy.get('#sugar').prev().contains('Espresso')

    });

    it("prevAll() to get all previous sibling DOM elements within elements", () => {
        // locate that element and select all the sibling elements up the DOM and validate the length of that list
        cy.get('.sales').prevAll().should('have.length', 2)

    });

    it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {
        // Locate the element and then get all that siblings up the DOM until a specific condition has been met and this case, until it reaches the 'fruits' id and validate the length of that list
        cy.get('#veggie').prevUntil('#fruits').should('have.length', 5)

    });

    it("siblings() To get all sibling DOM elements of elements", () => {

        // We locate an element and find all the siblings of that element and validate the length of that list.
        cy.get('.traversal-button-other-states .active').siblings().should('have.length', 3)
    });
});
