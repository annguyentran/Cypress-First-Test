/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
    beforeEach(() => {
      cy.visit("https://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    });
    it("Calculate and assert the total age of all users", () => {
        // An empty array that will contain all the user information
        var userDetails = [];
        let numb = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {

            // The table will be iterated and store data which the text of each element and each index of the array
            userDetails[index] = $el.text();
        }).then(() => {
            var i;
            for(i = 0; i < userDetails.length; i++) {

                // Goes through the user details and as it goes through each index, if an index contains a number string that can be converted into a number data type, then that will be added to the numb variable.
                if(Number(userDetails[i])) {
                    numb += Number(userDetails[i])
                }
                //cy.log(userDetails[i])
            }
            cy.log("Found total age: " + numb)
            expect(numb).to.eq(322)
        })
    });

    it("Calculate and assert the age of a given user based on last name", () => {

        // In the table, get the data of all the users, last names only and iterate through each of them
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {

            // Store each of the elements text into a variable called text
            const text = $el.text()

            // Within that text variable, see if there is a name called 'woods'
            if(text.includes("Woods")) {

                // Get the whole table with the last names again, and have it equal the same index as the name 'woods' is in which is 5. Then, the next command will go over to the text cell of woods which is the age cell and pass that information into the function as the age parameter to be used in the function. 
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age) {

                    // Get the parameters text into a variable and validate the age
                    const userAge = age.text();
                    expect(userAge).to.equal("80");
                })
            }
        })
    });   
  });
  