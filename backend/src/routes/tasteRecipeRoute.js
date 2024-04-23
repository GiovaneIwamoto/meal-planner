const express = require('express')

const { GetTaste } = require('../controllers/tasteRecipeController')

const router = express.Router()

// Get  Taste
router.get('/:id', (req, res) => GetTaste(req, res))

module.exports = router
