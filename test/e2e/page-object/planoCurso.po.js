const Base = require('../page-object/base.po');
const MenuWrapper = require('../page-object/menuWrapper.po');
const url = 'sig-plano-de-curso-web/#/plano-curso';

class PlanoCurso extends Base {
    constructor(){
        super();
        this.menuWrapper = new MenuWrapper();
    }
    navegarPesquisa(){
        this.menuWrapper.navegarPesquisa(url);
    }
    navegarNovo(){
        this.menuWrapper.navegarNovo(url);
    }
}
module.exports = PlanoCurso;