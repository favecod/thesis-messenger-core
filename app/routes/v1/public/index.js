const express = require('express')
const router = express.Router()

// Authentication
router.get('/join', (req, res) => {
    res.json('join')
})

module.exports = router