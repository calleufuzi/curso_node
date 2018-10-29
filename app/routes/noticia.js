module.exports = (app) => {

  app.get('/noticia', (req, res) => {

    var connection = app.config.dbConnection();
    const noticiaModel = app.app.models.noticiasModel  

    noticiaModel.getNoticia(connection, (erro, result) => {
      res.render('noticias/noticia', {noticia: result});
    })
});
}
