const Base = require('../page-object/base.po');

class MenuWrapper extends Base {
    navegarPesquisa(url){
        browser.get(url);
    }
    navegarNovo(url){
        this.navegarPesquisa(url);
        this.getBotaoNovo().click();
    }
}

module.exports = MenuWrapper;