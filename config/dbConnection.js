const mysql = require('mysql');

const connMySQL = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kiss653676',
    database: 'portal_noticias'
  });
};

module.exports = () => {
  return connMySQL;
}
