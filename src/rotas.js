
const express = require('express');
const fazerBusca = require('./controladores/buscaGenero');

const rotas = express();

rotas.get('/:genero', fazerBusca);

module.exports = rotas;