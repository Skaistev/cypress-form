import  { defineConfig } from 'cypress';
import plugin from '@testomatio/reporter/lib/adapter/cypress-plugin/index.js';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // testomat.io reporter plugin:
    plugin(on, config);
    },
  },
})


