const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Validation routing depending on sort code that's entered
router.use('/12', require('./views/12/_routes'));
router.use('/11', require('./views/11/_routes'));
router.use('/10', require('./views/10/_routes'));
router.use('/09', require('./views/09/_routes'));
router.use('/08', require('./views/08/_routes'));
router.use('/07', require('./views/07/_routes'));
router.use('/06', require('./views/06/_routes'));
router.use('/05', require('./views/05/_routes'));
router.use('/04', require('./views/04/_routes'));
router.use('/03', require('./views/03/_routes'));
router.use('/change-account', require('./views/change-account/_routes'));
router.use('/new-account', require('./views/new-account/_routes'));

module.exports = router
