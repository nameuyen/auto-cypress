import { defineConfig } from "cypress";
const fs = require('fs')
const nodemailer = require("nodemailer");

// module.exports = (on, config) => {
//   const USER = process.env.USER;
//   const PASS = process.env.PASS;
//   const RECIPIENTS = process.env.RECIPIENTS;
    
//   if (USER) {
//     config.env.USER = USER;
//   }

//   if (PASS) {
//     config.env.PASS = PASS;
//   }

//   if (RECIPIENTS) {
//     config.env.RECIPIENTS = RECIPIENTS;
//   }
 
//   return config;
// };


module.exports = defineConfig({
  e2e: {
    env: {
      BASE_URL_CYPRESS: process.env.BASE_URL_CYPRESS
            
    },
    baseUrl: 'https://docs.cypress.io/api/commands/type',
    specPattern: 'cypress/e2e/**/*.spec.cy.{js,jsx,ts,tsx}',
    reporter: 'mochawesome',
    "reporterOptions": {
      "reportDir": "reports",
      "reportFilename": "results"
    },
    setupNodeEvents(on, config) {

      on('task', {
        readFileMaybe(folderName) {
          return new Promise((resolve, reject) => {
            fs.readdir(folderName, (err, files) => {
              if (err) {
                return reject(err)
              }

              return resolve(files)
            })

          });

        },
      })

      // implement node event listeners here
      const host = 'smtp.gmail.com'
      const port = 587
      // // create your own SMTP transport
      const transport = nodemailer.createTransport({
        host,
        port,
        secure: false,
        auth: {
          user: config.env.USER,
          pass: config.env.PASS
        }
      })

      // require('cypress-email-results')(on, config, {
      //   email: config.env.RECIPIENTS,
      //   // pass your transport object
      //   emailOnSuccess: false,
      //   transport

      // })

    }
  }
})
