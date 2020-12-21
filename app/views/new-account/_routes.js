const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Validation routing depending on sort code that's entered

router.post('/find-account', function (req, res) {

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

  else if (sortCode === '222222') {
    res.redirect('sort-code-changed')
  }

  else if (sortCode === '333333') {
    res.redirect('sort-code-does-not-exist')
  }

  else if (sortCode === '444444') {
    res.redirect('roll-number-format-error')
  }

  else if (sortCode === '555555') {
    res.redirect('account-number-does-not-exist')
  }

  else if (sortCode === '') {
    res.redirect('enter-sort-code')
  }

  else if (sortCode === '999999') {
    res.redirect('interruption')
  }

  else {
    res.redirect('check-answers')
  }

})

router.post('/new-interruption', function (req, res) {

  const newInterruption = req.session.data['interruption']

  if (newInterruption === 'yes') {
    res.redirect('bank-details')
  } else {
    res.redirect('continue-app')
  }
})

module.exports = router
