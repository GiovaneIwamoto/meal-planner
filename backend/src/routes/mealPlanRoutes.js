const express = require('express')

const { GetMealPlan } = require('../controllers/mealPlanControllers')

const router = express.Router()

// Rota get planejamento alimentar
router.get('/', GetMealPlan)

module.exports = router
