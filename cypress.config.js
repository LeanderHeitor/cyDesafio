const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    baseUrl: 'https://dev.facilitat.isitics.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
