// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email,password) => { 
    cy.visit("https://globalshala-iam.ml/auth/login")
    
        cy.get("[name$='email']").type(email);
        cy.get("input[placeholder='Password']").type(password);
     cy.get("#kt_login_signin_submit").click();
    
 })

 import 'cypress-file-upload';

 Cypress.Commands.add('getIframe', (iframe)=>{
   return cy.get(iframe)
          .its('0.contentDocument.body')
          .should('be.visible')
          .then(cy.wrap)
 })