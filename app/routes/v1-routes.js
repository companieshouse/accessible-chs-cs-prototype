//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// const lastUpdated = require('../middleware/last-updated')

// // Add the middleware to the router
// router.use(lastUpdated)

// Add your routes here
router.post('/v1/start', function (req, res) {

    res.redirect('/v1/company-number')
})


router.post('/v1/company-number', function (req, res) {

    res.redirect('/v1/confirm-company')
})

router.post('/v1/confirm-company', function (req, res) {

    res.redirect('/v1/authentication')
})


router.post('/v1/authentication', function (req, res) {

    res.redirect('/v1/check-trading-status')
})

//where does this go if user selects 'no'?
router.post('/v1/check-trading-status', function (req, res) {

    res.redirect('/v1/tasklist')
})


// routing based on buttons, what about based on radio selection? What if user says no?
// router.post('/v1/check-sic-codes', function (req, res) {
//   const action = req.body.action;
//   if (action === 'sic-next') {
//     res.redirect('/check-statement-of-capital');
//   } 
//   else {
//     res.redirect('/v1/tasklist');
//   }
// })

// routing based on buttons, how about radio selection too? What happens if user says no, or no but has been submitted??
router.post('/v1/check-sic-codes', function (req, res) {
  if (req.body['sic-submit-next']) {
    res.redirect('/v1/check-statement-of-capital');
  } else if (req.body['sic-submit-return']) {
    res.redirect('/v1/tasklist');
  } else {
    res.redirect('/v1/check-sic-codes'); // fallback
  }
})

router.post('/v1/check-statement-of-capital', function (req, res) {
  if (req.body['capital-submit-next']) {
    res.redirect('/v1/officers');
  } else if (req.body['capital-submit-return']) {
    res.redirect('/v1/tasklist');
  } else {
    res.redirect('/v1/check-sic-codes'); // fallback
  }
})

module.exports=router;