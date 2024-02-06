const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'e5d756',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    /// Locating all the files under the e2e folder and find all the files with the ones in the square brackets
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",

    // Here we are going to other folder and ignoring any folder with .js
    excludeSpecPattern: "cypress/e2e/other/*.js",

    // base url where we can use / instead to navigate to the base url. This is so that when we need to change the url, we would only need to change this variable which would change throughout all the files that use the base url.
    baseUrl: 'https://www.webdriveruniversity.com',
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    // Take a screenshot when a test fails
    screenshotOnRunFailure: true,
    // Deletes the screenshots in the file before a test is executed when using the run command in the terminal
    trashAssetsBeforeRuns: true,
    // Changes the quality of the recorded video
    videoCompression: 32,
    // Capture the video when cypress run is executed
    video: true,
    // upload the video to the cypress dashboard
    videoUploadOnPasses: true,
    // Global viewports that will affect all of the test files unless specified otherwise
    // viewportHeight: 1080,
    // viewportWidth: 1920,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },

    // Setting up the enviromental variable for use and can be changed in the terminal and the changes can happen across multiple test cases.
    env: {
      first_name: "Sarah",
      // Another way to set a another url because there can only be one base URL at a time.
      webdriveruni_homepage: 'https://www.webdriveruniversity.com'


    }
  },
  
});
