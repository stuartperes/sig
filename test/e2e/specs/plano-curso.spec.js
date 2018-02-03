const ListarPlanoCurso = require('../page-object/listar-plano-curso.po');

describe("Listar Plano de Curso", () => {
    const listarPlanoCurso = new ListarPlanoCurso();
    it("Acessar a listagem de plano de curso com sucesso", () => {
        listarPlanoCurso.navegar();
        //browser.get('sig-plano-de-curso-web/#/plano-curso');
        //const breadCrumb = element(by.css('a[href="#/plano-curso"]'));
        expect(listarPlanoCurso.breadCrumb.isDisplayed()).toBe(true);
    });
});