/// <reference types="Cypress" />
// "../" is moving up a directory
// importing the page object
import Homepage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";

describe("Test contact us form via WebdriverUni", () => {

    // Calling the variables here so that there would be no repetition
    const homepage_PO = new Homepage_PO();
    const contact_Us_PO = new Contact_Us_PO();


  before(() => {
    cy.fixture("example").then((data) => {
      //this.details = data; // depending on the context where it is being used (function or browser)

      globalThis.details = data; // Can be accessed/used globally whetever the data is being accessed in a different enviroment (browsers, node.js,etc.)
    });
  });
  beforeEach(() => {
    // Using an enviromental variable to change the homepage
    // cy.visit(
    //   Cypress.env("webdriveruni_homepage" + "/Contact-Us/contactus.html")
    // );

    // declaring the variable to use the page object and its commands
    homepage_PO.visitHomepage();
    homepage_PO.clickOn_ContactUs_Button();
  });
  it("Should be able to submit a sucessful submission via contact us form", () => {
    // Visiting the homepage and going to the contact page on the same tab by removing an attribute
    // cy.visit("https://www.webdriveruniversity.com")
    // cy.get("#contact-us").invoke("removeAttr", "target").click();

    // Checking if the homepage has the same title as expected
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver");

    // Checking if the url matches the expected
    cy.url().should("include", "https://www.webdriveruniversity.");



    // Custom command where we populate the fields using data from our fixture
    // cy.webdriverUni_ContactForm_Submission(
    //   details.first_name,
    //   details.last_name,
    //   details.email,
    //   "How can I learn Cypress?",
    //   "h1",
    //   "Thank You for your Message!"
    // );

    // Call the page object model and put the parameters/custom command into the page object
    contact_Us_PO.contactForm_Submission(
      Cypress.env("first_name"),
      details.last_name,
      details.email,
      "How can I learn Cypress?",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Should not be able to submit a sucessful submission via contact us form as all fields are required", () => {
  

    // Custom command where we populate the fields using data from our fixture
    // Adding the enviromental variable here and this can be changed within the terminal
  //   cy.webdriverUni_ContactForm_Submission(
  //     Cypress.env("first_name"),
  //     details.last_name,
  //     " ",
  //     "How can I learn Cypress?",
  //     "body",
  //     "Error: Invalid email address"
  //   );
  
    // Call the page object model and put the parameters/custom command into the page object
    contact_Us_PO.contactForm_Submission(
      Cypress.env("first_name"),
      details.last_name,
      " ",
      "How can I learn Cypress?",
      "body",
      "Error: Invalid email address"
    );
  });
  
  
  
});
