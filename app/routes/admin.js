module.exports = (app) => {
  app.get('/formulario_inclusao_noticia', (req, res) => {
    res.render('admin/form_add_noticias')
  });
  app.post('/noticias/salvar', (req, res) => {
    let noticia = req.body;

    // SALVAR NOTICIAS

    const connection = app.config.dbConnection();
    const noticiasModel = app.app.models.noticiasModel;
    noticiasModel.salvarNoticia(noticia, connection, (erro, result) => {
      res.redirect('/noticias');
    })
  });
}