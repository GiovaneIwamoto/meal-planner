const axios = require('axios')

const GetTasteData = async (id) => {
    try {
        // Consumo API externa
        const apiKey = process.env.API_KEY
        const apiUrl = `https://api.spoonacular.com/recipes/${id}/tasteWidget.json?apiKey=${apiKey}`

        const response = await axios.get(apiUrl)

        return response.data

    // Caso de erro 
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = { GetTasteData }