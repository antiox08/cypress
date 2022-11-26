describe('scrolling', function () { 
    it('scroll_to_carousel', function() {
        
        cy.visit('https://unsplash.com/')
        cy.get('input[data-test="homepage-header-search-form-input"]').type('car{enter}')

        cy.get('[data-test="page-header-title"]').should('have.text', 'Car')

        cy.wait(1000)
        cy.scrollTo(0, 1500)
        
        cy.get(':nth-child(2) > :nth-child(5) > .YdIix > :nth-child(1)').click()
})
})
