describe("protocol", ()=> {
    it("protocol", ()=>  {
    cy.visit(`${site}`)
    cy.viewport(1920, 1080)

    cy.get("input[type='text']").type(`${email}`)
    cy.get("input[type='password']").type(`${password}`)

    cy.get('.btn').click()  

    cy.location('protocol').should('eq', 'https:')
})
})
