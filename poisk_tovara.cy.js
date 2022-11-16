describe("M.video", ()=> {
    it("pokypka", ()=> { 
        cy.visit("https://www.mvideo.ru/"),
        cy.viewport(1280, 1020),

        cy.get('input[type="text"]').type("iphone 12").type("{enter}"),
        cy.contains("Ноутбук игровой MSI Katana GF66 11UE-639X").click(),
        cy.contains("Добавить в корзину").click()

    })
})
