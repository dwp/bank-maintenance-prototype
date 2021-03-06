const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Validation routing depending on sort code that's entered

router.post('/citizens/someone-else', function (req, res) {

  let sortCode = req.session.data['sort-code']

  if (sortCode === '112233') {
    res.redirect('account-number-error')
  }

  else if (sortCode === '1122334') {
    res.redirect('sort-code-error')
  }

  else if (sortCode === '111111') {
    res.redirect('roll-number-error')
  }

  else if (sortCode === '223344') {
    res.redirect('service-down')
  }

  else if (sortCode === '222222') {
    res.redirect('sort-code-changed')
  }

  else if (sortCode === '333333') {
    res.redirect('sort-code-does-not-exist')
  }

  else if (sortCode === '444444') {
    res.redirect('roll-number-format-error')
  }

  else if (sortCode === '777777') {
    res.redirect('membership-number-format-error')
  }

  else if (sortCode === '888888') {
    res.redirect('membership-number-error')
  }

  else if (sortCode === '555555') {
    res.redirect('account-number-does-not-match')
  }

  else if (sortCode === '') {
    res.redirect('enter-sort-code')
  }

  else if (sortCode === '666666') {
    res.redirect('interruption-success')
  }

  else if (sortCode === '111113') {
    res.redirect('name-error')
  }

  else {
    res.redirect('check-answers')
  }
})

router.post('/citizens/change-interruption', function (req, res) {

  const changeInterruption = req.session.data['interruption']

  if (changeInterruption === 'yes') {
    res.redirect('bank-details')
  } else {
    res.redirect('#')
  }
})

module.exports = router
