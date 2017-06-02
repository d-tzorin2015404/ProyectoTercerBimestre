var express = require("express");

var categoria = require("../model/categoria");

var router = express.Router();

router.get("/api/Categoria/", function(req, res) {
    categoria.getCategorias(function(error, resultados) {
        if (typeof resultados !== undefined) {
            res.json(resultados);
        } else {
            res.json({"Mensaje": "No hay Categorías"});
        }
    });
});

router.get("/api/Categoria/:idCategoria", function(req, res) {
    var idCategoria = req.params.idCategoria;

    categoria.getCategoria(idCategoria, function(error, resultados) {
        if (typeof resultados !== undefined) {
            res.json(resultados);
        } else {
            res.json({"Mensaje": "No hay Categorías"});
        }
    });
});

router.post("/api/Categoria/", function(req, res) {
    var data = {
        "idCategoria": null,
        "nombreCategoria": req.body.nombreCategoria
    }

    categoria.insert(data, function(error, resultado) {
        if ( (resultado) && (resultado.insertId) > 0) {
            res.redirect("/api/Categoria");
        } else {
            res.json({"mensaje": "No se ingreso la categoria"});
        }
    });

});

router.put("/api/Categoria/:idCategoria", function(req, res) {
    var data = {
        "idCategoria": req.body.idCategoria,
        "nombreCategoria": req.body.nombreCategoria
    }

    if (idCategoria === data.idCategoria) {
        categoria.update(data, function(err, resultado) {
            if (resultado !== undefined) {
                res.json(resultado);
            } else {
                res.json({"Mensaje": "No se modifico la categoria"});
            }
        });
    } else {
        res.json({"Mensaje": "No concuerdan los datos"});
    }

});

router.delete("/api/Categoria/:idCategoria",
    function(req, res) {
        var idCategoria = req.params.idCategoria;
        categoria.delete(idCategoria, function(error, resultados) {
            if (resultados) {
                res.redirect("/api/Categoria");
            } else {
                res.json({"Mensaje": "No se pudo eliminar"});
            }
        });
});

//npm uninstall pug --save
//npm install ejs --save

module.exports = router;
