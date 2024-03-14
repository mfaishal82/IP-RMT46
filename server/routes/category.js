const express = require('express')
const { getCategory, getCategoryById, updateCategoryById, deleteCategoryById } = require('../controllers/categoryController')
const router = express.Router()

router.get('/', getCategory)
router.get('/:id', getCategoryById)
router.put('/:id', updateCategoryById)
router.delete('/:id', deleteCategoryById)

module.exports = router