var database = require("./database/connection");

var categoria = {};


categoria.getCategorias = function(callback) {
    if (database) {
        database.query("SELECT * FROM Categoria", 
        function(error, results) {
            if (error) {
                throw error;
            } else {
                callback(null, results);
            }
        });
    }//FIN IF
}//FIN getCategorias

categoria.getCategoria = function(idCategoria, callback) {
    if (database) {
        var sql = "SELECT * FROM Categoria WHERE idCategoria = ?";
        database.query(sql, idCategoria,
         function(error, result) {
            if (error) {
                throw error;
            } else {
                callback(null, result);
            }
        });
    }
}

categoria.insert = function(nombre, callback)  {
    if (database) {
        var sql = "INSERT INTO Categoria SET ? ";
        database.query(sql, nombre, 
        function(error, result) {
            if (error) {
                throw error;
            } else {
                callback(null, {"insertId": result.insertId});
            }
        });
    }
}

categoria.update = function(data, callback) {
    if (database)  {
        var sql = "UPDATE Categoria SET"
        + "nombreCategora = ? WHERE idCategoria = ?";
        database.query(sql, [data.idCategoria, data.nombreCategoria], 
        function(error, result) {
            if (error) {
                throw error;
            } else {
                callback(null, {"insertId": result.insertId});
            }
        })
    }
}

categoria.delete = function(idCategoria, callback) {
    if (database) {
        var sql = "DELETE FROM Categoria WHERE idCategoria = ?";
        database.query(sql, idCategoria,
         function(error, result) {
            if (error) {
                throw error;
            } else {
                callback(null, {"Mensaje": "Eliminado con exito"});
            }
        });
    }
}

module.exports = categoria;