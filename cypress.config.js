const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9sufe3',
  e2e: {

    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
        baseUrl: 'http://127.0.0.1:8000/',
        fixturesFolder: "tests/e2e/fixtures",
        supportFile: false,
  },
});
