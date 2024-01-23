/// <reference types="cypress" />

describe('Test File Upload via webdriveruni', () => {
    it('Upload a file....', () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});

        // Getting the file box and specifying the path within our cypress automation framework files to upload the laptop png file
        cy.get("#myFile").selectFile("cypress/fixtures/laptop.png");
        cy.get("#submit-button").click();
    });

    it('Upload No file...', () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});
        cy.get("#submit-button").click();
    });
});