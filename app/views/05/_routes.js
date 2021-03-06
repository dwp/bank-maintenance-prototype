const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Validation routing depending on sort code that's entered

router.post('/someone-elses/someone-else', function (req, res) {

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
    res.redirect('account-number-does-not-match')
  }

  else if (sortCode === '') {
    res.redirect('enter-sort-code')
  }

  else if (sortCode === '666666') {
    res.redirect('interruption-success')
  }

  else {
    res.redirect('check-answers')
  }
})

router.post('/my-name/change-my-name', function (req, res, next) {

  let sortCode2 = req.session.data['sort-code2']

  if (sortCode2 === '112233') {
    res.redirect('account-number-error')
  }

  else if (sortCode2 === '1122334') {
    res.redirect('sort-code-error')
  }

  else if (sortCode2 === '111111') {
    res.redirect('roll-number-error')
  }

  else if (sortCode2 === '222222') {
    res.redirect('sort-code-changed')
  }

  else if (sortCode2 === '333333') {
    res.redirect('sort-code-does-not-exist')
  }

  else if (sortCode2 === '444444') {
    res.redirect('roll-number-format-error')
  }

  else if (sortCode2 === '555555') {
    res.redirect('account-number-does-not-match')
  }

  else if (sortCode2 === '666666') {
    res.redirect('interruption-success')
  }

  else if (sortCode2 === '') {
    res.redirect('enter-sort-code')
  }

  else {
    res.redirect('my-name/check-answers')
  }
})

router.post('/my-name/change-interruption', function (req, res) {

  const changeInterruption = req.session.data['interruption']

  if (changeInterruption === 'yes') {
    res.redirect('bank-details')
  } else {
    res.redirect('continue-app')
  }
})

router.post('/someone-elses/change-interruption', function (req, res) {

  const changeInterruption = req.session.data['interruption']

  if (changeInterruption === 'yes') {
    res.redirect('bank-details')
  } else {
    res.redirect('../carers-allowance/declaration-no-details')
  }
})

module.exports = router
