const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Validation routing depending on sort code that's entered

router.post('/find-account', function (req, res) {

  let sortCode = req.session.data['sort-code']

  if (sortCode === '112233') {
    res.redirect('new-account/validation/account-number-error')
  }

  else if (sortCode === '1122334') {
    res.redirect('new-account/validation/sort-code-error')
  }

  else if (sortCode === '111111') {
    res.redirect('new-account/validation/roll-number-error')
  }

  else if (sortCode === '222222') {
    res.redirect('new-account/validation/sort-code-changed')
  }

  else if (sortCode === '333333') {
    res.redirect('new-account/validation/sort-code-does-not-exist')
  }

  else if (sortCode === '') {
    res.redirect('new-account/validation/enter-sort-code')
  }

  else if (sortCode === '999999') {
    res.redirect('new-account/interruption')
  }

  else {
    res.redirect('new-account/check-answers')
  }

})

router.post('/change-account', function (req, res) {

  let sortCode = req.session.data['sort-code']

  if (sortCode === '112233') {
    res.redirect('change-account/validation/account-number-error')
  }

  else if (sortCode === '1122334') {
    res.redirect('change-account/validation/sort-code-error')
  }

  else if (sortCode === '111111') {
    res.redirect('change-account/validation/roll-number-error')
  }

  else if (sortCode === '222222') {
    res.redirect('change-account/validation/sort-code-changed')
  }

  else if (sortCode === '333333') {
    res.redirect('change-account/validation/sort-code-does-not-exist')
  }

  else if (sortCode === '') {
    res.redirect('change-account/validation/enter-sort-code')
  }

  else if (sortCode === '999999') {
    res.redirect('change-account/interruption')
  }

  else {
    res.redirect('change-account/check-answers')
  }
})

module.exports = router
