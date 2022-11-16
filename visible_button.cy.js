describe("visible_button", () => {
it("check_visivble_expect_button", () => {
    cy.visit("https://unsplash.com/")
    
    cy.contains('Log in')
    .should('be.visible')
    .click()

    cy.get('input[id="user_email"]')
    .type('invalidlog@mail.ru')
    .should('have.value', 'invalidlog@mail.ru')

    cy.get('input[id="user_password"]')
    .type('invalidpass')
    .should('have.value', 'invalidpass')

    cy.get('input[type="submit"]')
    .should('be.visible')
    .click()

    cy.contains(' Invalid email or password.')
    .should('be.visible')

})
})
