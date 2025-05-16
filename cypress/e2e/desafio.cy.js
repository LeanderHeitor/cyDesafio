describe('Desafio', () => {
  it('Desafio tudo em um', () => {
    cy.visit('/')
    cy.get('#email').type('facilitat@facilitat.com')
    cy.get('#password').type('123456')
    cy.get('span').contains('Entrar').click()
    cy.wait(4000)
    cy.get('h2').contains('Gestão de Empreendimentos')
    cy.wait(2000)
    cy.get('input[placeholder="Pesquisar Empreendimento"]').type('Empreendimento PAPITO')
    cy.wait(2000)
    //cy.get(/input[placeholder="Pesquisar Empreendimento"]/i).type('Empreendimento PAPITO')
    //n da pra usar case insensitive?
    cy.get("h6").contains(/empreendimento papito/i).should("be.visible")
    
  })
  it('desafio um', () => {
    cy.visit('/')
    cy.get('#email').type('facilitat@facilitat.com')
    cy.get('#password').type('123456')
    cy.get('span').contains('Entrar').click()
    cy.wait(4000)
  });
  it('desafio dois', () => {
    cy.login('facilitat@facilitat.com', '123456')
    cy.visit('/facilitat/project-management')
    cy.get('h2').contains('Gestão de Empreendimentos')
  });
  it('desafio três', () => {
    cy.login('facilitat@facilitat.com', '123456')
    cy.visit('/facilitat/project-management')
    cy.get('input[placeholder="Pesquisar Empreendimento"]').type('Empreendimento PAPITO')
  });
  it.only('desafio quatro', () => {
    cy.login('facilitat@facilitat.com', '123456')
    cy.visit('/facilitat/project-management')
    cy.get('input[placeholder="Pesquisar Empreendimento"]').type('Empreendimento PAPITO')
    cy.wait(2000)
    cy.get("h6").contains(/empreendimento papito/i).should("be.visible")
  });
  
})