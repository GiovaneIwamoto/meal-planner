// Importa o módulo do ExpressJS e configura a utilização de rotas
const express = require('express');
const router = express.Router();

// Importa os controllers necessários
const priceBreakdownController = require('../controllers/priceBreakdownController');

// Cria rota para buscar os preços dos ingredientes das receitas
router.get('/:recipeId', (request, response) => priceBreakdownController.getPriceBreakdown(request, response));

module.exports = router;