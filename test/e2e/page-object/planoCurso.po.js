const Base = require('../page-object/base.po');
const url = 'sig-plano-de-curso-web/#/plano-curso';

class PlanoCurso extends Base {
    navegarPesquisa(){
        browser.get(url);
    }
    navegarNovo(){
        this.navegarPesquisa();
        this.getBotaoNovo().click();
    }
}
module.exports = PlanoCurso;