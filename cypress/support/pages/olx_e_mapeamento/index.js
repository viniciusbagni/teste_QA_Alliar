class Olx  {

acessaSite(){
  cy.visit('https://www.olx.com.br');
   }

   pesquisaValida(){
    cy.get('input[type="text"]')
        .should('be.visible')
        .type('Golf 2.0{enter}')
        cy.timeout({ timeout: 8000 })
        cy.screenshot()
   }

   pesquisaInvalida(){
    cy.get('input[type="text"]')
            .should('be.visible')
            .type('!{enter}')
            cy.screenshot()
   }
}

export default new Olx();
