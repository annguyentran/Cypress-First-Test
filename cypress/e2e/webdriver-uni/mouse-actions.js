/// <reference types="cypress" />

describe("Test mouse actions", () => {
    it("Scroll element into view", () => {
        cy.visit("https://www.webdriveruniversity.com")

        // The element will be scrolled into view and then clicked on
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
    });

    it("I should be able to drag and drop a draggable item", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        // The mouse will be held down on the center of the element
        cy.get('#draggable').trigger('mousedown', {which: 1});
        // The mouse will move the element over to #drippable element and then release the element by using mouseup
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
    });

    it("I should be able to perform a double mouse click", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        //doubleclick action 
        cy.get('#double-click').dblclick();
    });

    it("I should be able hold down the left mouse click button on a given element", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        // The element that has the mousedown on will be passed through and validated the changes
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    });
}) 