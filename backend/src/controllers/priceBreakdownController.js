// Importa o serviço responsável por realizar as requisições
const priceBreakdownService = require('../services/priceBreakdownService');

// Função responsável por retornar os preços detalhados dos ingredientes da receita
const getPriceBreakdown = async function (request, response) {
    try {
        // Recupera o ID da receita
        const recipeId = request.params.recipeId;

        // Faz a requisição para obter os preços dos ingredientes
        const apiResponse = await priceBreakdownService.getPriceBreakdown(recipeId);

        // Retorna um JSON contendo os preços dos ingredientes da receita
        response.json(apiResponse)
    } catch (error) {
        // Retorna um JSON contendo código e mensagem de erro
        response.status(error.response.status).send({
            error_code: error.response.status,
            error_message: error.response.statusText
        })
    }
}

module.exports = {
    getPriceBreakdown
}