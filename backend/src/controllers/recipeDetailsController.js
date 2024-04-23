const recipeDetailsService = require('../services/recipeDetailsService');
const { RecipeDetails, Ingredient } = require('../models/recipeDetails');

// Função para retornar JSON dos detalhes de uma receita
async function getRecipeDetails(req, res) {
    // Extrai parâmetro do ID da receita
    const recipeID = req.params.recipeID;
    
    try {
        // Requisita os detalhes completos de uma receita
        const fullRecipeData = await recipeDetailsService.requestRecipeDetails(recipeID);
        
        // Transforma o vetor completo de ingredientes numa instância da classe simplificada Ingredient
        const simpleIngredients = fullRecipeData.extendedIngredients.map(ingredient => {
            return new Ingredient(ingredient.aisle, ingredient.name, ingredient.measures);
        });

         // Cria novo objeto com a alteração da nova instância de ingredientes
         const newRecipeData = {
            id: fullRecipeData.id,
            title: fullRecipeData.title,
            image: fullRecipeData.image,
            servings: fullRecipeData.servings,
            readyInMinutes: fullRecipeData.readyInMinutes,
            dishTypes: fullRecipeData.dishTypes,
            extendedIngredients: simpleIngredients,
            summary: fullRecipeData.summary
        };

        // Cria a instância de RecipeDetails
        const recipeDetails = new RecipeDetails(
            newRecipeData.id,
            newRecipeData.title,
            newRecipeData.image,
            newRecipeData.servings,
            newRecipeData.readyInMinutes,
            newRecipeData.dishTypes,
            newRecipeData.extendedIngredients,
            newRecipeData.summary
        );
        

        // Retorno do JSON
        return res.json(recipeDetails);
    } catch (error) {
        throw(error);
    }
};

// Exportando função
module.exports = {
    getRecipeDetails
};