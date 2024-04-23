const { GetTasteData }  = require('../services/tasteRecipeService.js')

const GetTaste = async (req, res) => {
    const id = req.params.id;

    // Chama o serviço que consome a API
    try {
        const tasteData = await GetTasteData(id)
        res.status(200).json(tasteData)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = { GetTaste }
