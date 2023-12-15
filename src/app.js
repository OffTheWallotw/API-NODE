const express = require('express');
const app = express();
const puerto = 80;
const TemasController = require('./controllers/TemasController');

app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('¡Prueba 123456789012!');
});

app.get('/temas', TemasController.indexGet);
app.get('/temas/:id([0-9]+)', TemasController.itemGet);
app.post('/temas', TemasController.indexPost);
app.put('/temas/:id([0-9]+)', TemasController.itemPut);
app.patch('/temas/:id([0-9]+)', TemasController.itemPatch);

app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});