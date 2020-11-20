const express = require("express");
const app = express();

app.get("/user", function (req, res) {
  res.json({
    ok: 200,
    mensaje: "Usuarios consultados con exito.",
  });
});

app.post("/user", function (req, rest) {
  let nombre = req.body.nombre;

  let body = req.body;
  if (nombre == undefined) {
    res.status(400).json({
      ok: 400,
      mensaje: "Favor de enviar el nombre",
    });
  } else {
    rest.json({
      ok: 200,
      mensaje: "Usuario insertado con exito.",

      body: body,
    });
  }
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