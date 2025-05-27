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

// SIC code routing
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
// router.post('/v1/check-statement-of-capital', function (req, res) {
//   if (req.body['capital-submit-next']) {
//     res.redirect('/v1/officers');
//   } else if (req.body['capital-submit-return']) {
//     res.redirect('/v1/tasklist');
//   } else {
//     res.redirect('/v1/check-sic-codes'); // fallback
//   }
// })


//statement of capital routing

router.post('/v1/check-statement-of-capital', function (req, res) {
  const statementOfCapital = req.body.statementOfCapital; // 'yes' or 'no'
  if (req.body['capital-submit-next']) {
    if (statementOfCapital === 'yes') {
      res.redirect('/v1/officers');
    } else if (statementOfCapital === 'no') {
      res.redirect('/v1/you-cannot-use-this-service'); 
    } else if (statementOfCapital === 'noUpdate') {
      res.redirect('/v1/officers'); 
    } 
    else {
      res.redirect('/v1/check-statement-of-capital'); // fallback if nothing selected
    }
  } else if (req.body['capital-submit-return']) {
    // If the user clicks 'return', redirect to tasklist
      if (statementOfCapital === 'yes') {
      res.redirect('/v1/tasklist');
      } else if (statementOfCapital === 'no') {
      res.redirect('/v1/you-cannot-use-this-service'); 
      }
      else if (statementOfCapital === 'noUpdate') {
      res.redirect('/v1/tasklist'); 
      }
  } else {
    res.redirect('/v1/check-statement-of-capital'); // fallback
  }
});

// officers routing

router.post('/v1/officers', function (req, res) {
  const officers = req.body.officers; // 'yes' or 'no'
  if (req.body['officer-submit']) {
    if (officers === 'yes') {
      res.redirect('/v1/pscs');
    } else if (officers === 'no') {
      res.redirect('/v1/update-officer-details'); 
    } else if (officers === 'noUpdate') {
      res.redirect('/v1/pscs'); 
    } 
    else {
      res.redirect('/v1/officers'); // fallback if nothing selected
    }
  } else if (req.body['officer-submit-return']) {
    // If the user clicks 'return', redirect to tasklist
      if (officers === 'yes') {
      res.redirect('/v1/tasklist');
      } else if (officers === 'no') {
      res.redirect('/v1/update-officer-details'); 
      }
      else if (officers === 'noUpdate') {
      res.redirect('/v1/tasklist'); 
      }
  } else {
    res.redirect('/v1/officers'); // fallback
  }
});

// pscs routing

router.post('/v1/pscs', function (req, res) {
  const psc = req.body.psc; // 'yes' or 'no'
  if (req.body['psc-submit']) {
    if (psc === 'yes') {
      res.redirect('/v1/shareholders');
    } else if (psc === 'no') {
      res.redirect('/v1/update-psc-details'); 
    } else if (psc === 'noUpdate') {
      res.redirect('/v1/shareholders'); 
    } 
    else {
      res.redirect('/v1/psc'); // fallback if nothing selected
    }
  } else if (req.body['psc-submit-return']) {
    // If the user clicks 'return', redirect to tasklist
      if (psc === 'yes') {
      res.redirect('/v1/tasklist');
      } else if (psc === 'no') {
      res.redirect('/v1/update-psc-details'); 
      }
      else if (psc === 'noUpdate') {
      res.redirect('/v1/tasklist'); 
      }
  } else {
    res.redirect('/v1/psc'); // fallback
  }
});






module.exports=router;