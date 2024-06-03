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
    cy.contains('label','Username:').should('be.visible'),
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
  beforeEach(() => {
    cy.visit('localhost:5173')
  });
  it('able to fill registration form with correct data and submit the form ', () => {

});
   it('registration form is not filled, gets error ', () => {
    
});
 it('registration form is not filled, gets error ', () => {
    
});
})