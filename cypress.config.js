const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      baseUrl: "https://tolpa.pl/"
    },
    hideXHRInCommandLog: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    configFile: 'reporter-config.json',
    overwrite: false,
    html: false,
    json: true,
  }
});
