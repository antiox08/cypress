describe("title", ()=> {
    it("header", ()=> {
        cy.viewport(1920, 1080)

        cy.visit(`${site}`)
        cy.title().should('eq', 'Личный кабинет')

        cy.get("input[type='text']").type(`${email}`)
        cy.get("input[type='password']").type(`${password}`)
        
        cy.get('.btn').click(),
        cy.title().should('eq', 'Главная страница | Личный кабинет')
})
})
