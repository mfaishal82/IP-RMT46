const express = require('express')
const errorHandler = require('../middlewares/errorHandler')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Server success' })
})

router.use('/auth', require('./auth'))
router.use('/auth', require('./pub'))


router.use(errorHandler)

module.exports = router