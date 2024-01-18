/// <reference types="cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
  it("Navigating to specific product pages", () => {
    // Visiting the webpage
    cy.visit("https://www.automationteststore.com/");

    // Getting the general link that highlights all of the tabs and select specifics tabs using the contain method

    // This will fail because the order of excution is not guaranteed
    // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
    // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
    // makeupLink.click();
    // skincareLink.click();

    // This will work but it is not recommended because if the logic below changes or extends, there is no guarantee that the code will work.
    // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
    // makeupLink.click();
    // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
    // skincareLink.click();

    // Recommended approach since this uses only cypress commands and cypress can handle the order of exceutions when using cypress commands.
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();
  });

  it("Get specific products on the page", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();

    //Following code will fail: (Wait time )
    // const header = cy.get("h1 .maintext");
    // cy.log(header.text())
    // This works since the const variables are part of the cypress command and that const commands should be used with promises and heacy commands to extract texts and be put into variables
    cy.get("h1 .maintext").then((header) => {
      const headerText = header.text();
      cy.log("Found header text: " + headerText);
      expect(headerText).is.eq("Makeup");
    });
  });

  it.only("should validate contents on the contact page", () => {
    // Cypress method (Chaining commands)
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    //Uses cypress commands and chaining
    //   cy.contains("#ContactUsFrm", "Contact Us Form")
    //     .find("#field_11")
    //     .should("contain", "First name");

    //JQuery Approach
    // Find the id with of ContactUsFrm and inside of that element find the element that contains the specific text. That text element will then go through the promise
    cy.contains("#ContactUsFrm", "Contact Us Form").then(function(text) {
      // Store the first name text in a variable
      const firstNameText = text.find("#field_11").text();
      expect(firstNameText).to.contain("First name");

      //Embedded commands (Closure)
      cy.get("#field_11").then(function(fnText) {
        cy.log(fnText.text());
        cy.log(fnText);
      });
    });
  });
});
