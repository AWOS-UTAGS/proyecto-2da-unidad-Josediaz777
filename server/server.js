require ('./config/config.js')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.send('<h1> Bienvenido a mi Servidor REST </h1>')
})

app.get('/user', function(req, res) {
    res.json({
        ok: 200,
        mensaje: 'Usuarios consultados con exito.'
    })
})

app.post('/user', function(req, rest) {
    
    let nombre = req.body.nombre;

    let body = req.body;
    if (nombre == undefined) {
        res.status(400).json({
            ok: 400,
            mensaje: "Favor de enviar el nombre"
        })
    } else {
        rest.json({
            ok: 200,
            mensaje: 'Usuario insertado con exito.',
           
            body: body
        })
    }
})

app.put('/user/:id/:nombre', function(req, rest) {
    let id = req.params.id;
    let nombre = req.params.nombre;

    rest.json({
        ok: 200,
        mensaje: 'Usuario actualizado con exito',
        id: id,
        nombre: nombre
    })
})

app.delete('/user/:id', function(req, rest) {
    let id = req.params.id;
    rest.json({
        ok: '200',
        mensaje: 'Usuario eliminado con exito',
        id: id
    })
})

app.listen(process.env.PORT, () => {
        console.log('El servidor esta en linea por el puerto ', process.env.PORT);
    })