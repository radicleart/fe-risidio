describe('The Home Page', () => {
    it('successfully loads home page', () => {
      cy.visit('/')
      cy.contains('What Is Risidio')
      cy.get('#section0')
      cy.get('.call-button-text').contains('About Us').click()
      cy.get('.call-button-text').contains('Our Products').click()
    })

    it('successfully loads products page', () => {
      cy.visit('/products')
      cy.contains('Our Products')
      cy.get('#section-11')
      cy.get('.icon-down').click()
    })

    it('successfully loads news page', () => {
      cy.visit('/blog')
      cy.contains('Managing Lightning Channels')
      cy.get('.blog-main')
      cy.get('.filters').contains('Blockstack').click()
      cy.get('.filters').contains('Blockstack').should('have.class', 'active')
    })
  })