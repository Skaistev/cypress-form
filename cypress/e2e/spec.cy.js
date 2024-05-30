/* eslint-disable no-undef */
describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:5173');


  })
})

describe('elements check with empty fields', () => {
  beforeEach(() => {
    cy.visit('localhost:5173')
  });
  it('elements exists', () => {
    //form heading exist 
    cy.contains('h3','Registration').should('be.visible'),
    //all form exist
    cy.get('form').should('be.visible'),
     //username field exist
     cy.contains('label','Username:').should('be.visible').and("have.value", "")

  });
});