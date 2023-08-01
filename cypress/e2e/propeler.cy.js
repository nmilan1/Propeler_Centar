beforeEach('launches website', () => {
  cy.visit('https://propeler.io/');
})

describe('Home Page', () => {

  it('Verify page logo', () => {
    cy.get('.custom-logo').click();
    cy.url().should('eq', 'https://propeler.io/')
  })

  it('Verify READ MORE aboout projects button', () => {
    cy.get(':nth-child(1) > .btn').click();
    cy.url().should('eq', 'https://propeler.io/projekti/');
  })

  it('Verify HOME button', () => {
    cy.get('#menu-item-123 > a').click();
    cy.url().should('eq', 'https://propeler.io/');
  })

  it('Verify Search hover function', ()=> {
    cy.get('.search > .fa').realHover();
    cy.get('.search-form').should('be.visible');
  })

  it('Verify OUR SRVICES button', () => {
    cy.get('#menu-item-20 > a').click();
    cy.url().should('eq', 'https://propeler.io/our-services/');
  })

  it('Verify PROJECTS button', () => {
    cy.get('#menu-item-19 > a').click();
    cy.url().should('eq', 'https://propeler.io/projekti/');
  })

  it('Verify COURSES button', () => {
    cy.get('#menu-item-302 > a').click();
    cy.url().should('eq', 'https://propeler.io/courses/');
  })

  it('Verify ABOUT US button', () => {
    cy.get('#menu-item-18 > a').click();
    cy.url().should('eq', 'https://propeler.io/o-nama/');
  })

  it('Verify CONTACT button', () => {
    cy.get('#menu-item-17 > a').click();
    cy.url().should('eq', 'https://propeler.io/kontakt/');
  })

  it('Verify Search hover functiont', ()=>{
    cy.get('.search > .fa').realHover();
    cy.get('#searchform').should('be.visible');
  })

  it('Verify Search function', ()=>{
    cy.get('.search > .fa').realHover();
    cy.get('#s').type('courses');
    cy.get('.searchsubmit').click().url().should('eq', 'https://propeler.io/?s=courses');
  })

})