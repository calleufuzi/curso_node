module.exports = function() {

  this.getNoticias = (connection, callback) => { 
    connection.query('select * from noticias', callback);
  }
  this.getNoticia = (connection, callback) => { 
    connection.query('select * from noticias where id_noticias = 2  ',callback)
  }
  this.salvarNoticia = (noticia, connection, callback) => { 
    console.log('Teste');
    
    connection.query('insert into noticias set ? ',noticia, callback)
  }

  return this;
}
