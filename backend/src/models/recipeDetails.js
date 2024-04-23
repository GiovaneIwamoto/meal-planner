// Modelo de dados dos detalhes de uma receita
class RecipeDetails {
        constructor(id, title, image, servings, readyInMinutes, dishTypes, extendedIngredients, summary) {
            this.id = id
            this.title = title
            this.image = image
            this.servings = servings
            this.readyInMinutes = readyInMinutes
            this.dishTypes = dishTypes // vetor 
            this.extendedIngredients = extendedIngredients.map(ingredient => new Ingredient(ingredient.aisle, ingredient.name, ingredient.measures)) // vetor de objetos
            this.summary = summary
        }
}

class Ingredient {
    constructor(aisle, measures, name) {
        this.aisle = aisle
        this.measures = measures
        this.name = name
    }
}

module.exports = {
    RecipeDetails,
    Ingredient
}