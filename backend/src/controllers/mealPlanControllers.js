const { GetMealPlanData } = require('../services/mealPlanServices.js')

const GetMealPlan = async (req, res) => {
    // Parâmetros
    const params = req.query

    // Chamada do service para obter dados do planejamento alimentar
    try {
        const mealPlanData = await GetMealPlanData(params)
        res.status(200).json(mealPlanData)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = { GetMealPlan }
