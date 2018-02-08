const PlanoCurso = require('../page-object/planoCurso.po');

describe("Listar Plano de Curso", () => {
    const planoCurso = new PlanoCurso();
    it("Acessar a tela de pesquisa de plano de curso", () => {
        planoCurso.navegarPesquisa();
        expect(planoCurso.getBreadCrumb().isDisplayed()).toBe(true);
    });
    it("Apresentar planos de curso cadastrados", () => {
        planoCurso.navegarNovo();
        browser.sleep(3000);
    });
});