/// <reference types="cypress" />

describe("Test Datepicker via webdriveruni", () => {
    it("Select date from the datepicker", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true})

        // Open the calendar so that the code can interact with the calendar
        cy.get('#datepicker').click();

        // let date = new Date();
        // date.setDate(date.getDate())  // Set the date based on what cypress gets on the webpage
        // cy.log(date.getDate()) //get current day i.e. 22

        // let date2 = new Date();
        // date2.setDate(date.getDate() + 5)
        // cy.log(date2.getDate()) //get current day i.e. 22 + 5 = 27

        var date = new Date();
        date.setDate(date.getDate() + 400);

        // Get the year 
        var futureYear = date.getFullYear();

        // Get the month 
        var futureMonth = date.toLocaleString("default", {month: "long"});

        // get the day
        var futureDay = date.getDate();

        cy.log("Future year to select: " + futureYear);
        cy.log("Future month to select: " + futureMonth);
        cy.log("Future day to select: " + futureDay);

        function selectMonthAndYear() {

            // Get the calendar dropdown and find the element where you can change the year and month
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {

                // If the current date does not equal the next year, then the next month arrow will be selected until the nexy year comes up
                if(!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {

                    // If the month does not match then keep changing until the correct future month appear
                    if(!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                })
            })
        }

        function selectFutureDay() {
            // Get all if the current days in the calendar and click on the day that the future day function is at 
            cy.get('[class="day"]').contains(futureDay).click();
        }

        selectMonthAndYear();
        selectFutureDay();
    });
})