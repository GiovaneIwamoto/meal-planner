// Inclui o service necessário
const frontEndServices = require('../services/frontEndServices');

// Função que obtem e renderiza detalhes da receita
const getRecipeDetails = async function (request, response) {
    const recipeID = request.params.recipeID;   // Obtem ID a partir dos parâmetros
    try {
        // Chama serviço para obter dados necessários
        const results = await frontEndServices.getRecipeDetails(recipeID);

        // Renderiza os dados na view especificada
        return response.render('recipeDetailsView', {results: results, id: recipeID});
    } catch (error) {
        throw (error);
    }
};

// Função responsável por retornar a página de preços dos ingredientes
const getPriceBreakdownPage = async function (request, response) {
    // Recupera o ID da receita
    const recipeId = request.params.recipeId;

    // Busca os preços dos ingredientes no back-end
    const priceBreakdown = await frontEndServices.getPriceBreakdown(recipeId);

    // Renderiza a view com os preços dos ingredientes da receita
    response.render('priceBreakdownView', { priceBreakdown: priceBreakdown });

}

// Função que retorna sabor da receita
const getTaste = async function (request, response) {
    // Recupera o ID da receita
    const recipeId = request.params.recipeId;

    // Busca os preços dos ingredientes no back-end
    const taste = await frontEndServices.getTaste(recipeId);

    // Renderiza a view com os preços dos ingredientes da receita
    response.render('tasteView', { taste: taste });
}


// Função responsável por retornar a página com plano alimentar
const getMealPlannerPage = async function(request, response) {
    // Obtém exigências para geração do plano alimentar pelos parâmetros
    let params = request.query;

    // Remove parâmetros vazios
    Object.keys(params).forEach(key => {
        if (params[key] === '') {
            delete params[key];
        }
    });

    // Busca o plano alimentar no back-end
    try {
        const mealPlannerResult = await frontEndServices.getMealPlanner(params);
        // Renderiza a view com o plano alimentar
        response.render('mealPlannerView', { mealPlannerResult: mealPlannerResult });

    } catch (error) {
        throw (error);
    }
}

// Renderizar página home
const getHomePage = async function(request,response){
    try {
        response.render('homePageView');

    } catch (error) {
        throw (error);
    }
}

module.exports = { getPriceBreakdownPage, getRecipeDetails, getTaste, getMealPlannerPage, getHomePage }
