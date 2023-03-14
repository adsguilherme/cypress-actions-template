const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter')

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjJiYTliOWQ0LThlNzQtNDQ5Yi1iOTBjLWNlNDYxMWQ3ZGQxMC0xNjc4ODIwNjY0MDI2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNmJiNzQxMGQtMTM0Yi00MTBlLWIzYWMtNWM5MDgxMWU3NTY1IiwidHlwZSI6InQifQ.2vdKH0ZH_WMNg-rEnumGVeErpl2HrDaVKg8dNnNqn5Q' 

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
  console.error(err)
})