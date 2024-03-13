const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Server success' })
})

router.use('/auth', require('./auth'))
router.use('/auth', require('./pub'))


module.exports = router