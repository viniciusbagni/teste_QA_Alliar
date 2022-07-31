import olx from '../support/pages/olx_e_mapeamento';

describe('Pesquisa OLX', () => {
    beforeEach(() => {
        olx.acessaSite();
    })

//1
    it('realiza a pesquisa válida no site', function () {
        olx.pesquisaValida();
    })

//2

    it('realiza a pesquisa inválida no site', function () {   
        olx.pesquisaInvalida();                
    })

})