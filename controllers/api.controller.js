/////////////////////////////////////////
// Project: Noteapp
// Name: /controllers/api.controller.js
// Auhtor: oTropicalista
// Create in: 28/07/2020
/////////////////////////////////////////

//Import model
const Note = require('../models/notes.model');

// API Controller
exports.test = function (req, res) {
    // res.send('ola do controller');
    res.render('Note');
};

exports.details = function (req, res) {
    res.send({ type: 'GET' });
};

exports.listAllNotes = function (req, res, next) {
    Note.find({}).then(function (note) {
        res.render('../views/listNotes.ejs', {pis: note});
    }).catch(next);
};

exports.add = function (req, res, next) {
    //criar novo 'note' no bd a partir do request,
    //devolve o note criado ao client
    Note.create(req.body).then(function(note) {
        res.send(note);
    }).catch(next);
    console.log('Foi feito um POST: ', req.body);
    // res.send({
    //     type: 'POST',
    //     titulo: req.body.titulo,
    //     conteudo: req.body.conteudo
    // });
};

// Atualiza a note do bd com as propriedades em 'req.body'
exports.update = function (req, res) {
    Note.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {
        Note.findOne({_id: req.params.id}).then(function(note){
            res.send(note);
        });
    }).catch(next);
    res.send({ type: 'PUT' });
};

exports.delete = function (req, res) {
    // apaga a note do bd e depois retorna ela para o usuario
    Note.findByIdAndRemove({_id: req.params.id}).then(function(note) {
        res.send(note);
    }).catch(next);
    // res.send({ type: 'DELETE' });
};
