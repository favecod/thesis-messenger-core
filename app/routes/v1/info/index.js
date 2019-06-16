const express = require('express')
const router = express.Router()

// API Version
router.get('/version', (req, res) => {
    res.json('Messeger 2019 Version: 1.0.0')
})

module.exports = router