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
router.post('/v2/start', function (req, res) {

    res.redirect('/v2/sign-in')
})

router.post('/v2/sign-in', function (req, res) {

    res.redirect('/v2/password')
})

router.post('/v2/password', function (req, res) {

    res.redirect('/v2/company-number')
})


router.post('/v2/company-number', function (req, res) {

    res.redirect('/v2/confirm-company')
})

router.post('/v2/confirm-company', function (req, res) {

    res.redirect('/v2/authentication')
})


router.post('/v2/authentication', function (req, res) {

    res.redirect('/v2/check-trading-status')
})

// //where does this go if user selects 'no'?
// router.post('/v2/check-trading-status', function (req, res) {

//     res.redirect('/v2/tasklist')
// })

// route for trading status

router.post('/v2/check-trading-status', function (req, res) {
  const answer = req.body.sharesTradingStatus; // 'yes' or 'no'
  if (answer === 'yes') {
    res.redirect('/v2/tasklist');
  }  else {
    res.redirect('/v2/you-cannot-use-this-service'); // fallback or error
  }
});


// routes for sic codes
router.post('/v2/check-sic-codes', function (req, res) {
  const sicCodes = req.body.sicCodes; // 'yes' or 'no'
  if (sicCodes === 'yes') {
    res.redirect('/v2/tasklist');
  } else if (sicCodes === 'noUpdate') {
    res.redirect('/v2/tasklist'); 
  } else if (sicCodes === 'no') {
    res.redirect('/v2/you-cannot-use-this-service');
  } else  {
    res.redirect('/v2/check-sic-codes'); // fallback or error
  }
});

// routes for statement of capital

router.post('/v2/check-statement-of-capital', function (req, res) {
  const statementOfCapital = req.body.statementOfCapital; // 'yes' or 'no'
  if (statementOfCapital === 'yes') {
    res.redirect('/v2/tasklist');
  } else if (statementOfCapital === 'noUpdate') {
    res.redirect('/v2/tasklist');
  }
  else if (statementOfCapital === 'no') {
    res.redirect('/v2/you-cannot-use-this-service'); 
  } else  {
    res.redirect('/v2/check-statement-of-capital'); // fallback or error
  }
});

// officers routing

router.post('/v2/officers', function (req, res) {
  const officers = req.body.officers; // 'yes' or 'no'
  if (officers === 'yes') {
    res.redirect('/v2/tasklist');
  } else if (officers === 'noUpdate') {
    res.redirect('/v2/tasklist');
  }
  else if (officers === 'no') {
    res.redirect('/v2/update-officer-details'); 
  } else  {
    res.redirect('/v2/officers'); // fallback or error
  }
});

//psc routing

router.post('/v2/pscs', function (req, res) {
  const psc = req.body.psc; // 'yes' or 'no'
  if (psc === 'yes') {
    res.redirect('/v2/tasklist');
  } else if (psc === 'noUpdate') {
    res.redirect('/v2/tasklist');
  }
  else if (psc === 'no') {
    res.redirect('/v2/update-psc-details'); 
  } else  {
    res.redirect('/v2/pscs'); // fallback or error
  }
});

// shareholders routing

router.post('/v2/shareholders', function (req, res) {
  const shareholders = req.body.shareholders; // 'yes' or 'no'
  if (shareholders === 'yes') {
    res.redirect('/v2/tasklist');
  } else if (shareholders === 'noUpdate') {
    res.redirect('/v2/tasklist');
  }
  else if (shareholders === 'no') {
    res.redirect('/v2/you-cannot-use-this-service'); 
  } else  {
    res.redirect('/v2/shareholders'); // fallback or error
  }
});

// registered email routing
router.post('/v2/registered-email-address', function (req, res) {
  const registeredEmail = req.body.registeredEmail; // 'yes' or 'no'
  if (registeredEmail === 'yes') {
    res.redirect('/v2/tasklist');
  } else if (registeredEmail === 'noUpdate') {
    res.redirect('/v2/tasklist');
  }
  else if (registeredEmail === 'no') {
    res.redirect('/v2/you-cannot-use-this-service'); 
  } else  {
    res.redirect('/v2/registered-email-address'); // fallback or error
  }
});


// registered office address routing
router.post('/v2/registered-office-address', function (req, res) {
  const officeAddress = req.body.officeAddress; // 'yes' or 'no'
  if (officeAddress === 'yes') {
    res.redirect('/v2/tasklist');
  } else if (officeAddress === 'noUpdate') {
    res.redirect('/v2/tasklist');
  }
  else if (officeAddress === 'no') {
    res.redirect('/v2/update-registered-office'); 
  } else  {
    res.redirect('/v2/registered-office-address'); // fallback or error
  }
});

// company records routing
router.post('/v2/company-records', function (req, res) {
  const companyRecords = req.body.companyRecords; // 'yes' or 'no'
  if (companyRecords === 'yes') {
    res.redirect('/v2/tasklist');
  } else if (companyRecords === 'noUpdate') {
    res.redirect('/v2/tasklist');
  }
  else if (companyRecords === 'no') {
    res.redirect('/v2/update-records-location'); 
  } else  {
    res.redirect('/v2/company-records'); // fallback or error
  }
});




module.exports=router;