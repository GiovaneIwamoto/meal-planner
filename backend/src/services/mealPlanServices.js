const axios = require('axios')

const GetMealPlanData = async (params) => {
    try {
        // Url e chave para consumo
        const apiKey = process.env.API_KEY
        const apiUrl = 'https://api.spoonacular.com/mealplanner/generate'

        // Consumo API externa
        const response = await axios.get(apiUrl, {
            params: {
                ...params,
                apiKey: apiKey,
            },
        })
        // Tratamento caso não receba resposta externa
        if (!response.status === 200) {
            throw new Error('Failed to fetch meal plan')
        }
        return response.data
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = { GetMealPlanData }
