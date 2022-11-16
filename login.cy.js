describe("login", () =>{
    it("correct_lcorrect", () => {
    cy.visit(`${site}`),

    cy.get("input[type='text']").type(`${email}`)
    cy.get("input[type='password']").type(`${password}`)
    
    cy.get('.btn').click()  
})
})
