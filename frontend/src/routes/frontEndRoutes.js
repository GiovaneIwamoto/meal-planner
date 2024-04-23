// Importa o módulo do ExpressJS e configura a utilização de rotas
const express = require('express');
const router = express.Router();

// Importa controller a ser utilizado nas rotas
const frontEndController = require("../controllers/frontEndController");

// Define rota para acessar detalhes de uma receita
router.get('/recipe-details/:recipeID', (request, response) => frontEndController.getRecipeDetails(request, response));
router.get('/price-breakdown/:recipeId', (request, response) => frontEndController.getPriceBreakdownPage(request, response));
router.get('/taste/:recipeId', (request, response) => frontEndController.getTaste(request, response));
router.get('/meal-plan', (request, response) => frontEndController.getMealPlannerPage(request,response));
router.get('/', (request,response) => frontEndController.getHomePage(request,response));

module.exports = router;