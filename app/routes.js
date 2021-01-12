const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Validation routing depending on sort code that's entered
router.use('/04', require('./views/04/_routes'));
router.use('/03', require('./views/03/_routes'));
router.use('/change-account', require('./views/change-account/_routes'));
router.use('/new-account', require('./views/new-account/_routes'));

module.exports = router
