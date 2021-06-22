describe('My First Test', () => {
  it('Visits the page', () => {
    cy.visit('../../../page.html')
    cy.get('#mainButton').click()
    cy.contains('Success')
  })
})