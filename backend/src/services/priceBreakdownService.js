// Importa o módulo axios para realizar as requisições
axios = require('axios');

// Função responsável por realizar a requisição no endpoint de busca de preços da API
const getPriceBreakdown = async function(recipeId) {
    try {
        // Recupera a API Key e define o endpoint a ser utilizado
        const apiKey = process.env.API_KEY
        const apiEndpoint = `https://api.spoonacular.com/recipes/${recipeId}/priceBreakdownWidget.json?apiKey=${apiKey}`

        // Realiza a requisição na API e armazena o retorno
        const response = await axios.get(apiEndpoint);
        let priceBreakdownInfo = response.data;

        // Inclui a URL completa das imagens de cada ingrediente da receita
        priceBreakdownInfo.ingredients.forEach(ingredient => {
            let ingredientImageName = ingredient.image
            ingredient.image = `https://img.spoonacular.com/ingredients_250x250/${ingredientImageName}` 
        });

        return priceBreakdownInfo;
    } catch(error) {
        // Repassa o erro para a controller responsável
        throw error;
    }
}

module.exports = {
    getPriceBreakdown
}