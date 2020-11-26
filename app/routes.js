const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Validation routing depending on sort code that's entered

router.post('/find-account', function (req, res) {

  let sortCode = req.session.data['sort-code']

  if (sortCode === '112233') {
    res.redirect('new-account/validation/account-number-error')
  }

  if (sortCode === '1122334') {
    res.redirect('new-account/validation/sort-code-error')
  }

  if (sortCode === '111111') {
    res.redirect('new-account/validation/roll-number-error')
  }

})

router.post('/change-account', function (req, res) {

  let sortCode = req.session.data['sort-code']

  if (sortCode === '112233') {
    res.redirect('change-account/validation/account-number-error')
  }

  if (sortCode === '1122334') {
    res.redirect('change-account/validation/sort-code-error')
  }

  if (sortCode === '111111') {
    res.redirect('change-account/validation/roll-number-error')
  }

})

module.exports = router
