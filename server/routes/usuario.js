const express = require("express");
const Usuario = require('../models/usuario')
const app = express();

app.get("/user", function (req, res) {
  res.json({
    ok: 200,
    mensaje: "Usuarios consultados con exito.",
  });
});

app.post("/user", function (req, res) {
  let body = req.body;
  let usr = new Usuario({
    nombre: body.nombre,
    email: body.email,
    password: body.password
  });

  usr.save((err, usrDB) => {
    if(err) {
      return res.status(400).json({
        ok: false,
        msg: 'Ocurrio un error',
        err
      });
    }

    res.json({
      ok: true,
      msg: 'Usuario insertado con exito',
      usrDB
    })
  });

});

app.put("/user/:id/:nombre", function (req, rest) {
  let id = req.params.id;
  let nombre = req.params.nombre;

  rest.json({
    ok: 200,
    mensaje: "Usuario actualizado con exito",
    id: id,
    nombre: nombre,
  });
});

app.delete("/user/:id", function (req, rest) {
  let id = req.params.id;
  rest.json({
    ok: "200",
    mensaje: "Usuario eliminado con exito",
    id: id,
  });
});

module.exports = app;