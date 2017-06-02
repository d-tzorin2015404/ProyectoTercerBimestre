var mysql = require('mysql');
var parametros = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'AgendaIn6av'
}

var connection = mysql.createConnection(parametros);
connection.connect(function (error) {
  if (error) {
    throw error;
  }
});


module.exports = connection;
