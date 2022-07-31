class Mapear {

    acessaCartao(){
    
        cy.visit('https://www.cartaoalianca.com.br/checkout/dados-pessoais?code=cartao-saude-semestral');
       }
    
       testaLayout(){
    
        cy.get('.logo-with-text').click({ multiple: true, force: true})
        cy.get('.logo-with-text').click({ multiple: true, force: true})
        cy.get('.nav-link').click({ multiple: true, force: true })
        cy.get('.btn-outline-primary').click().should('be.visible')
        cy.timeout({ timeout: 5000 });
    
       }

       testaFormulario(){

        cy.get('#user_name').type('Vinicius')
        cy.get('#user_cpf').type('392.210.589-45')
        cy.get('#user_birth_date').type('06/02/1998')
        cy.get('#user_phone').type('19988284512')
        cy.get('#user_email').type('vinicius@exemplo.com')
        cy.get('#user_password').type('123456789')
        cy.get('#user_password_confirmation').type('123456789')
        cy.contains('input.btn-block[type="submit"]', 'Continuar').click()
        .should('be.visible')
        
       }
    }
    
    export default new Mapear();