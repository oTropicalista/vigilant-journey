/////////////////////////////////////////
// Project: Noteapp
// Name: /models/notes.model.js
// Auhtor: oTropicalista
// Create in: 28/07/2020
/////////////////////////////////////////

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let nots = 0;

// notes Schema
const NoteSchema = new Schema({
    titulo: {
        type: String,
        required: [true, '* Campo obrigatorio']
    },
    conteudo: {
        type: String
    }
});

// criar modelo baseado em NoteSchema bd -> coleção
const Note = mongoose.model('Notes', NoteSchema);

module.exports = Note;