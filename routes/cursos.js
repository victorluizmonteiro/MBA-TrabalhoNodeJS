module.exports = function (app) {
    var valida = require('./../middlewares/valida'); 
    var cursos = app.controllers.cursos;
    app.get('/menu',valida, cursos.menu);
    app.get('/cadCursos',valida, cursos.cadastroCursos);
    app.get('/listaCursos',valida, cursos.listaCursos);
    app.post('/novoCurso',cursos.novoCurso);
}; 