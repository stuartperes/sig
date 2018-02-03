class ListarPlanoCurso {
    constructor(){
        this.breadCrumb = element(by.css('a[href="#/plano-curso"]'));
    }
    navegar(){
        browser.get('sig-plano-de-curso-web/#/plano-curso');
    }
}

module.exports = ListarPlanoCurso;