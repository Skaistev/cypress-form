/* eslint-disable no-undef */
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
Cypress.Commands.add('fillAndSubmit', (username='', email='', password='', date='') => {
    cy.visit ('localhost:5173')
    if(username){
        cy.get("#username").type(username)
    }
    if(username){
        cy.get("#email").type(email)
    }
    if(username){
        cy.get("#password").type(password)
    }
    if(username){
        cy.get("#date").type(date)
    }

    cy.contains("button", /submit/i).click()
})


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