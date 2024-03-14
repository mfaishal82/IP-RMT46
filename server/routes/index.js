const express = require('express')
const errorHandler = require('../middlewares/errorHandler')
const { authentication } = require('../middlewares/authenticate')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Server success' })
})

router.use('/auth', require('./auth'))
router.use('/pub', require('./pub'))

router.use(authentication)

router.use('/content', require('./content'))
router.use('/tag', require('./tag'))

router.use(errorHandler)

module.exports = router