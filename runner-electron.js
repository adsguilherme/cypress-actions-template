const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter')

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: process.env.TARGET_TOKEN_ELECTRON, // Esse valor não pega da SECRET e sim da variável de ambiente
  }
  tesults.results(results, args);
})
.catch((err) => {
  console.error(err)
})