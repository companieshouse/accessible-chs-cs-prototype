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

// //where does this go if user selects 'no'?
// router.post('/v1/check-trading-status', function (req, res) {

//     res.redirect('/v1/tasklist')
// })

// route for trading status

router.post('/v1/check-trading-status', function (req, res) {
  const answer = req.body.sharesTradingStatus; // 'yes' or 'no'
  if (answer === 'yes') {
    res.redirect('/v1/tasklist');
  }  else {
    res.redirect('/v1/you-cannot-use-this-service'); // fallback or error
  }
});




// routing based on buttons, how about radio selection too? What happens if user says no, or no but has been submitted??
// router.post('/v1/check-sic-codes', function (req, res) {
//   if (req.body['sic-submit-next']) {
//     res.redirect('/v1/check-statement-of-capital');
//   } else if (req.body['sic-submit-return']) {
//     res.redirect('/v1/tasklist');
//   } else {
//     res.redirect('/v1/check-sic-codes'); // fallback
//   }
// })


router.post('/v1/check-sic-codes', function (req, res) {
  const sicCode = req.body.sicCode; // 'yes' or 'no'
  if (req.body['sic-submit-next']) {
    if (sicCode === 'yes') {
      res.redirect('/v1/check-statement-of-capital');
    } else if (sicCode === 'no') {
      res.redirect('/v1/you-cannot-use-this-service'); 
    } else {
      res.redirect('/v1/check-sic-codes'); // fallback if nothing selected
    }
  } else if (req.body['sic-submit-return']) {
    // If the user clicks 'return', redirect to tasklist
      if (sicCode === 'yes') {
      res.redirect('/v1/tasklist');
      } else if (sicCode === 'no') {
      res.redirect('/v1/you-cannot-use-this-service'); 
      }
  } else {
    res.redirect('/v1/check-sic-codes'); // fallback
  }
});








// routing based on buttons, how about radio selection too? What happens if user says no, or no but has been submitted??
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