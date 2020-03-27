require('./config/config');
const express = require('express');
const app = express();
var bodyParser = require('body-parser')


/* APP.USE=Son midle son funciones que se disparan cada vez que pase por ahí */
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    res.json('get usuario');
})

/* POST PARA CREAR NUEVOS REGISTROS */
app.post('/usuario', function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        });
    }
});

/* POST PARA BORRAR REGISTROS */
app.delete('/usuario', function(req, res) {
    res.json('delete usuario');
})

/* PUT ES MUY UTILIZADO PARA ACTUALIZAR DATA */
app.put('/usuario/:id', function(req, res) {
    /* Obtener id */
    let ID = req.params.id
    res.json({
        ID
    });
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});