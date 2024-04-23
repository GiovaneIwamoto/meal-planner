// Importa os módulos necessários
const express = require('express')
const path = require('path')

// Configurações básicas do ExpressJS
const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

// Define a porta onde estará rodando a aplicação
const port = process.env.SERVER_PORT

// Inclui os arquivos de rotas da aplicação
const mealPlanRoutes = require('./routes/mealPlanRoutes.js')
const recipeDetailsRoutes = require('./routes/recipeDetailsRoutes')
const priceBreakdownRoutes = require('./routes/priceBreakdownRoutes')
const tasteRecipeRoute = require('./routes/tasteRecipeRoute')

app.use('/price-breakdown/', priceBreakdownRoutes)
app.use('/meal-plan/', mealPlanRoutes)
app.use('/recipe-details/', recipeDetailsRoutes)
app.use('/taste/', tasteRecipeRoute)

// Inicializa a aplicação na porta definida anteriormente
app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})
