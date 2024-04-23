// Importa a biblioteca axios
const axios = require('axios')

// Função que busca detalhes de uma receita
const getRecipeDetails = async function (recipeID) {
    // Define a porta onde está sendo executado o back-end
    const serverPort = process.env.SERVER_PORT;
    const serverHostName = process.env.SERVER_HOSTNAME

    try {
        // Requisição ao backend
        const apiResponse = await axios.get(`http://${serverHostName}:${serverPort}/recipe-details/${recipeID}`);

        // Retorna os dados da API
        return apiResponse.data;

    } catch (error) {
        // Mensagem de erro
        console.error('Erro ao buscar detalhes da receita:', error);
        throw error;
    }
}

// Função responsável por requisitar os preços dos ingredientes no back-end
const getPriceBreakdown = async function (recipeId) {
    // Define a porta onde está sendo executado o back-end
    const serverPort = process.env.SERVER_PORT;
    const serverHostName = process.env.SERVER_HOSTNAME

    try {
        // Requisita os preços dos ingredientes no endpoint do back-end
        const apiResponse = await axios.get(`http://${serverHostName}:${serverPort}/price-breakdown/${recipeId}`);

        // Retorna os dados coletados em caso de sucesso
        return apiResponse.data;
    } catch (error) {
        // Retorna um erro em caso de falha na requisição
        return error;
    }
}


// Função que detalha sabor da receita
const getTaste = async function (recipeID) {
    // Define a porta onde está sendo executado o back-end
    const serverPort = process.env.SERVER_PORT;
    const serverHostName = process.env.SERVER_HOSTNAME

    try {
        // Requisição ao backend
        const apiResponse = await axios.get(`http://${serverHostName}:${serverPort}/taste/${recipeID}`);

        // Retorna os dados da API
        return apiResponse.data;

    } catch (error) {
        // Mensagem de erro
        console.error('Erro ao buscar sabores da receita:', error);
        throw error;
    }
}

// Função responsável por requisitar plano alimentar do back-end
const getMealPlanner = async function(params){
    const serverPort = process.env.SERVER_PORT;
    const serverHostName = process.env.SERVER_HOSTNAME
    try {
        // Requisita o plano alimentar no endpoint do back-end
        const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');

        const apiResponse = await axios.get(`http://${serverHostName}:${serverPort}/meal-plan/?${queryString}`);

        // Retorna os dados coletados em caso de sucesso
        return apiResponse.data;
    } catch (error) {
        // Retorna um erro em caso de falha na requisição
        return error;
    }
}

// Exportação do módulo
module.exports = {
    getPriceBreakdown,
    getRecipeDetails,
    getTaste,
    getMealPlanner
}
