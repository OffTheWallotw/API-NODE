const express = require('express');
const app = express();
const puerto = 80;
const TemasController = require('./controllers/TemasController');
const LibrosController = require('./controllers/LibrosController');
const EditorialesController = require('./controllers/EditorialesController');
const AutoresController = require('./controllers/AutoresController');

app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('¡Prueba 123456789012!');
});

//---------------------------------------------------------------
// Endpoints para la tabla temas
app.get('/temas', TemasController.indexGet);
app.get('/temas/:id([0-9]+)', TemasController.itemGet);
app.post('/temas', TemasController.indexPost);
app.put('/temas/:id([0-9]+)', TemasController.itemPut);
app.patch('/temas/:id([0-9]+)', TemasController.itemPatch);
app.delete('/temas/:id([0-9]+)', TemasController.itemDelete);

//---------------------------------------------------------------
// Endpoints para la tabla libros
app.get('/libros', LibrosController.indexGet);
app.get('/libros/:id([0-9]+)', LibrosController.itemGet);
app.post('/libros', LibrosController.indexPost);
app.put('/libros/:id([0-9]+)', LibrosController.itemPut);
app.patch('/libros/:id([0-9]+)', LibrosController.itemPatch);
app.delete('/libros/:id([0-9]+)', LibrosController.itemDelete);

//---------------------------------------------------------------
// Endpoints para la tabla libros
app.get('/editoriales', EditorialesController.indexGet);
app.get('/editoriales/:id([0-9]+)', EditorialesController.itemGet);
app.post('/editoriales', EditorialesController.indexPost);
app.put('/editoriales/:id([0-9]+)', EditorialesController.itemPut);
app.patch('/editoriales/:id([0-9]+)', EditorialesController.itemPatch);
app.delete('/editoriales/:id([0-9]+)', EditorialesController.itemDelete);

//---------------------------------------------------------------
// Endpoints para la tabla libros
app.get('/autores', AutoresController.indexGet);
app.get('/autores/:id([0-9]+)', AutoresController.itemGet);
app.post('/autores', AutoresController.indexPost);
app.put('/autores/:id([0-9]+)', AutoresController.itemPut);
app.patch('/autores/:id([0-9]+)', AutoresController.itemPatch);
app.delete('/autores/:id([0-9]+)', AutoresController.itemDelete);
//---------------------------------------------------------------
app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});