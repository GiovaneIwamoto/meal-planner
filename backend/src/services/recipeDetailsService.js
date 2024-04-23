const axios = require('axios');

// Função para fazer o request para a API
async function requestRecipeDetails(recipeID) {

    // Atribuição da chave da API
    const apiKey = process.env.API_KEY;

    const recipeUrl = `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${apiKey}&includeNutrition=true`;

    try{
        // Requisição para API
        const response = await axios.get(recipeUrl);

        // Retorna o JSON
        return response.data;
    } catch(error) {

        throw error;
    }
}

module.exports = {
    requestRecipeDetails
}