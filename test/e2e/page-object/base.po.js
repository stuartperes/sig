class Base {
    encontrarElemento(parametroBusca){
        return element(by.css(parametroBusca));
    }
    getBotaoNovo(){
        return this.encontrarElemento('[id="btn-novo"]');
    }

    getBreadCrumb(){
        return this.encontrarElemento('.breadcrumb-item');
    }

}

module.exports = Base;