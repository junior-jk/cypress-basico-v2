const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    videoUploadOnPasses: false,
    viewportHeight: 880,
    viewportWidth: 1280,
    viewportHeight: 860,
    viewportWidth: 410,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
