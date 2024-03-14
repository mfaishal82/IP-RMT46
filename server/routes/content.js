const express = require('express')
const { getContent, createContent, updateContentById, deleteContentById } = require('../controllers/contentController')
const router = express.Router()

router.get('/', getContent)
router.post('/', createContent)
router.put('/:id', updateContentById)
router.delete('/:id', deleteContentById)

module.exports = router