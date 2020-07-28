/////////////////////////////////////////
// Project: Noteapp
// Name: /app.js
// Auhtor: oTropicalista
// Create in: 28/07/2020
/////////////////////////////////////////

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

//CONEXAO BD

mongoose.connect('mongodb+srv://dbUser:afronteirafinal@cluster0.m0url.gcp.mongodb.net/db-noteapp?retryWrites=true&w=majority');
//Confirmação da conexão
mongoose.connection.on('connected', function () {
    console.log('Conectado ao bd '+'db-noteapp');
});

//Mensagem de erro
mongoose.connection.on('error', (err) => {
    console.log('Deu erro na conexao com o bd' + err);
});

// MIDDLEWARE
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

//Toda url começada por /api chama as rotas em ./routes/api
const routes = require('./routes/api.route');
app.use('/api', routes);

//Error handling middleware
app.use(function (err, req, res, next) {
    console.log('!!! Erro do controller !!!\n' + err);
    res.status(422).send({error: err.message});
});

app.get('/', (req, res) => {
     res.render('../views/notes.template.ejs');
 });


// SERVIDOR
let port = 8000;
app.listen(process.env.port || port, () => {
    console.log('Servidor rodando na ' + port);
});