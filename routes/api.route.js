/////////////////////////////////////////
// Project: Noteapp
// Name: api.route.js
// Auhtor: oTropicalista
// Create in: 28/07/2020
/////////////////////////////////////////

// API route
const express = require('express');
const router = express.Router();

//importa o controller da api
const apiController = require('../controllers/api.controller');

//url de testes: http://localhost:8000/teste
router.get('/teste', apiController.test);

// TODO: listar as notas
router.get('/listAllNotes', apiController.listAllNotes);

// lista uma nota por id para editar
// router.get('/edit/:id', apiController.edit);

// TODO: adicionar nova nota
router.post('/note', apiController.add);

// TODO: atualizar uma nota
router.put('/note/:id', apiController.update);

// TODO: deletar uma nota
router.delete('/note/:id', apiController.delete);

module.exports = router;
