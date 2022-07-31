import Mapear from '../support/pages/olx_e_mapeamento/elements';

describe('Mapear os casos de teste', () => {
    beforeEach(() => {
        Mapear.acessaCartao();
        
       })

// layout acima

       it('layout superior', function(){
          Mapear.testaLayout()
    })

//formulario

       it('preenche o formulário', function(){
        Mapear.testaFormulario();

    })
})