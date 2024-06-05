/* eslint-disable no-undef */

describe('elements check with empty fields', () => {
  beforeEach(() => {
    cy.visit('localhost:5173')
  });
  it('elements exists', () => {
    //form heading exist 
    cy.contains('h3','Registration').should('be.visible'),
    //all form exist
    cy.get('form').should('be.visible'),
     //fields of form exist
    cy.contains('label','Username:').should('exist'),
    cy.get("#username").should("be.visible").and("have.value", ""),
    cy.contains('label','Email:').should('be.visible').and("have.value", ""),
    cy.get("#email").should("be.visible").and("have.value", ""),
    cy.contains('label','Password:').should('be.visible').and("have.value", ""),
    cy.get("#password").should("be.visible").and("have.value", ""),
    cy.contains('label','Date of Birth:').should('be.visible')
    cy.get("#date").should("be.visible").and("have.value", "")

});

// submit btn exist 
  it('submit button visible', () => { 
  const element = cy.contains("button", /submit/i)
  element.should('be.visible')
});
})


describe('registration form functionality', () => {

  let username = 'test';
  let email = 'test@test.com';
  let password = "testtest";
  let date = "2030-06-04";

  let expectedAge = 24

  describe ("fill in form with correct data", ()=>{
      beforeEach(() => {
        cy.visit('localhost:5173')
      });
      
  it('able to fill registration form with correct data and submit the form ', () => {
    //visit the site
    cy.fillAndSubmit(username, email, password, date);
    //get the answer and check if correct 
    cy.get('.submitted-info').should("be.visible")
    .within(()=> {
      cy.contains('Username:').should('be.visible'),
      cy.contains('Email:').should('be.visible'),
      cy.contains('Date of Birth:').should('be.visible'),
      cy.contains('Age:').should('be.visible')
    })
});
  it('displays the submitted data', ()=>{
    cy.fillAndSubmit(username, email, password, date);

    cy.get('#submittedUsername').should('include.text', username),
    cy.get('#submittedEmail').should('include.text', email),
    cy.get('#submittedDate').should('include.text', date)
  })
  it('age in submitted info is correct',()=>{
    cy.fillAndSubmit(username, email, password, date);
    cy.get("#age").should("include.text", expectedAge|| "invalid date of birth")
  })
});
describe ("submit form with incorrect data", ()=>{

  beforeEach(() => {
    cy.visit('localhost:5173')
  });

  it('fill in form with empty fields ', () => {
    cy.contains('button','Submit').click();
    cy.get('.error').should('be.visible')
    .and('contain', "Username is required" )
    .and('contain', "Email is required" )
    .and('contain', "Password is required" )
    .and('contain', "Date of Birth is required" );
});
it('fill in form with incorrect email wihout "." character', () => {
  cy.fillAndSubmit(username, 'test@test', password, date);
  cy.get('.error').should('be.visible')
  .and('contain', "Email is invalid" );
});
it('fill in form with incorrect email wihout "@" character', () => {
  cy.fillAndSubmit(username, 'testtest.com', password, date);
  cy.get('.error').should('be.visible')
  .and('contain', "Email is invalid" );
});
it('fill in form with incorrect email wihout "@" and "." character', () => {
  cy.fillAndSubmit(username, 'testtestcom', password, date);
  cy.get('.error').should('be.visible')
  .and('contain', "Email is invalid" );
});
// it('fill in form with incorrect email ', () => {
//   cy.fillAndSubmit(username, 'testtest', password, date);
//   cy.get('#shadow-root')
//   .shadow()
//   .find('#email')
//   .should('have.attr', 'placeholder', 'Enter your email');
// });
it('fill in form with too short password ', () => {
  cy.fillAndSubmit(username, email, 'test', date);
  cy.get('.error').should('be.visible')
  .and('contain', "Password must be at least 6 characters" );
});
});
})

