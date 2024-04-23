// Chamada do Express, Router e função do Controller
const express = require('express');
const recipeDetailsController = require('../controllers/recipeDetailsController');
const router = express.Router();

// Rota de detalhes de uma receita
router.get('/:recipeID', (request, response) => {
    // Chama a função do Controller
    recipeDetailsController.getRecipeDetails(request, response)
});

// Exportação do Router
module.exports = router
