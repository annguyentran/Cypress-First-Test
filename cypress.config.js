const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    /// Locating all the files under the e2e folder and find all the files with the ones in the square brackets
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",

    // Here we are going to other folder and ignoring any folder with .js
    excludeSpecPattern: "cypress/e2e/other/*.js",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,

    // Setting up the enviromental variable for use and can be changed in the terminal.
    env: {
      first_name: "Sarah"

    }
  },
  
});
