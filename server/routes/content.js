const express = require('express')
const { getContent, createContent } = require('../controllers/contentController')
const router = express.Router()

router.get('/', getContent)
router.post('/', createContent)

module.exports = router