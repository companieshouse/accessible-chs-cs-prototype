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




// routing based on buttons, how about radio selection too? What happens if user says no, or no but has been submitted??
// router.post('/v2/check-sic-codes', function (req, res) {
//   if (req.body['sic-submit-next']) {
//     res.redirect('/v2/check-statement-of-capital');
//   } else if (req.body['sic-submit-return']) {
//     res.redirect('/v2/tasklist');
//   } else {
//     res.redirect('/v2/check-sic-codes'); // fallback
//   }
// })

// SIC code routing
// router.post('/v2/check-sic-codes', function (req, res) {
//   const sicCode = req.body.sicCode; // 'yes' or 'no'
//   if (req.body['sic-submit-next']) {
//     if (sicCode === 'yes') {
//       res.redirect('/v2/check-statement-of-capital');
//     } else if (sicCode === 'no') {
//       res.redirect('/v2/you-cannot-use-this-service'); 
//     } else {
//       res.redirect('/v2/check-sic-codes'); // fallback if nothing selected
//     }
//   } else if (req.body['sic-submit-return']) {
//     // If the user clicks 'return', redirect to tasklist
//       if (sicCode === 'yes') {
//       res.redirect('/v2/tasklist');
//       } else if (sicCode === 'no') {
//       res.redirect('/v2/you-cannot-use-this-service'); 
//       }
//   } else {
//     res.redirect('/v2/check-sic-codes'); // fallback
//   }
// });

// routing based on buttons, how about radio selection too? What happens if user says no, or no but has been submitted??
// router.post('/v2/check-statement-of-capital', function (req, res) {
//   if (req.body['capital-submit-next']) {
//     res.redirect('/v2/officers');
//   } else if (req.body['capital-submit-return']) {
//     res.redirect('/v2/tasklist');
//   } else {
//     res.redirect('/v2/check-sic-codes'); // fallback
//   }
// })


//statement of capital routing

// router.post('/v2/check-statement-of-capital', function (req, res) {
//   const statementOfCapital = req.body.statementOfCapital; // 'yes' or 'no'
//   if (req.body['capital-submit-next']) {
//     if (statementOfCapital === 'yes') {
//       res.redirect('/v2/officers');
//     } else if (statementOfCapital === 'no') {
//       res.redirect('/v2/you-cannot-use-this-service'); 
//     } else if (statementOfCapital === 'noUpdate') {
//       res.redirect('/v2/officers'); 
//     } 
//     else {
//       res.redirect('/v2/check-statement-of-capital'); // fallback if nothing selected
//     }
//   } else if (req.body['capital-submit-return']) {
//     // If the user clicks 'return', redirect to tasklist
//       if (statementOfCapital === 'yes') {
//       res.redirect('/v2/tasklist');
//       } else if (statementOfCapital === 'no') {
//       res.redirect('/v2/you-cannot-use-this-service'); 
//       }
//       else if (statementOfCapital === 'noUpdate') {
//       res.redirect('/v2/tasklist'); 
//       }
//   } else {
//     res.redirect('/v2/check-statement-of-capital'); // fallback
//   }
// });

// officers routing

// router.post('/v2/officers', function (req, res) {
//   const officers = req.body.officers; // 'yes' or 'no'
//   if (req.body['officer-submit']) {
//     if (officers === 'yes') {
//       res.redirect('/v2/pscs');
//     } else if (officers === 'no') {
//       res.redirect('/v2/update-officer-details'); 
//     } else if (officers === 'noUpdate') {
//       res.redirect('/v2/pscs'); 
//     } 
//     else {
//       res.redirect('/v2/officers'); // fallback if nothing selected
//     }
//   } else if (req.body['officer-submit-return']) {
//     // If the user clicks 'return', redirect to tasklist
//       if (officers === 'yes') {
//       res.redirect('/v2/tasklist');
//       } else if (officers === 'no') {
//       res.redirect('/v2/update-officer-details'); 
//       }
//       else if (officers === 'noUpdate') {
//       res.redirect('/v2/tasklist'); 
//       }
//   } else {
//     res.redirect('/v2/officers'); // fallback
//   }
// });

// pscs routing

// router.post('/v2/pscs', function (req, res) {
//   const psc = req.body.psc; // 'yes' or 'no'
//   if (req.body['psc-submit']) {
//     if (psc === 'yes') {
//       res.redirect('/v2/shareholders');
//     } else if (psc === 'no') {
//       res.redirect('/v2/update-psc-details'); 
//     } else if (psc === 'noUpdate') {
//       res.redirect('/v2/shareholders'); 
//     } 
//     else {
//       res.redirect('/v2/psc'); // fallback if nothing selected
//     }
//   } else if (req.body['psc-submit-return']) {
//     // If the user clicks 'return', redirect to tasklist
//       if (psc === 'yes') {
//       res.redirect('/v2/tasklist');
//       } else if (psc === 'no') {
//       res.redirect('/v2/update-psc-details'); 
//       }
//       else if (psc === 'noUpdate') {
//       res.redirect('/v2/tasklist'); 
//       }
//   } else {
//     res.redirect('/v2/psc'); // fallback
//   }
// });

// shareholders routing

// router.post('/v2/shareholders', function (req, res) {
//   const shareholders = req.body.shareholders; // 'yes' or 'no'
//   if (req.body['shareholder-submit']) {
//     if (shareholders === 'yes') {
//       res.redirect('/v2/registered-email-address');
//     } else if (shareholders === 'no') {
//       res.redirect('/v2/you-cannot-use-this-service'); 
//     } else {
//       res.redirect('/v2/shareholders'); // fallback if nothing selected
//     }
//   } else if (req.body['shareholder-submit-return']) {
//     // If the user clicks 'return', redirect to tasklist
//       if (shareholders === 'yes') {
//       res.redirect('/v2/tasklist');
//       } else if (shareholders === 'no') {
//       res.redirect('/v2/you-cannot-use-this-service'); 
//       }
//   } else {
//     res.redirect('/v2/shareholders'); // fallback
//   }
// });

// registered email address routing

// router.post('/v2/registered-email-address', function (req, res) {
//   const registeredEmail = req.body.registeredEmail; // 'yes' or 'no'
//   if (req.body['email-submit']) {
//     if (registeredEmail === 'yes') {
//       res.redirect('/v2/registered-office-address');
//     } else if (registeredEmail === 'no') {
//       res.redirect('/v2/you-cannot-use-this-service'); 
//     } else if (registeredEmail === 'noUpdate') {
//       res.redirect('/v2/registered-office-address'); 
//     } 
//     else {
//       res.redirect('/v2/registered-email-address'); // fallback if nothing selected
//     }
//   } else if (req.body['email-submit-return']) {
//     // If the user clicks 'return', redirect to tasklist
//       if (registeredEmail === 'yes') {
//       res.redirect('/v2/tasklist');
//       } else if (registeredEmail === 'no') {
//       res.redirect('/v2/you-cannot-use-this-service'); 
//       }
//       else if (registeredEmail === 'noUpdate') {
//       res.redirect('/v2/tasklist'); 
//       }
//   } else {
//     res.redirect('/v2/registered-email-address'); // fallback
//   }
// });


// registered office address routing

// router.post('/v2/registered-office-address', function (req, res) {
//   const officeAddress = req.body.officeAddress; // 'yes' or 'no'
//   if (req.body['office-submit']) {
//     if (officeAddress === 'yes') {
//       res.redirect('/v2/company-records');
//     } else if (officeAddress === 'no') {
//       res.redirect('/v2/update-registered-office'); 
//     } else if (officeAddress === 'noUpdate') {
//       res.redirect('/v2/company-records'); 
//     } 
//     else {
//       res.redirect('/v2/registered-office-address'); // fallback if nothing selected
//     }
//   } else if (req.body['office-submit-return']) {
//     // If the user clicks 'return', redirect to tasklist
//       if (officeAddress === 'yes') {
//       res.redirect('/v2/tasklist');
//       } else if (officeAddress === 'no') {
//       res.redirect('/v2/update-office-address'); 
//       }
//       else if (officeAddress === 'noUpdate') {
//       res.redirect('/v2/tasklist'); 
//       }
//   } else {
//     res.redirect('/v2/registered-office-address'); // fallback
//   }
// });


// company records routing
// router.post('/v2/company-records', function (req, res) {
//   const companyRecords = req.body.companyRecords; // 'yes' or 'no'
  
//     if (companyRecords === 'yes') {
//       res.redirect('/v2/tasklist');
//     } else if (companyRecords === 'no') {
//       res.redirect('/v2/update-records-location'); 
//     } else if (companyRecords === 'noUpdate') {
//       res.redirect('/v2/tasklist'); 
//     } 
//     else {
//       res.redirect('/v2/companyRecords'); // fallback if nothing selected
//     }
 
// });

module.exports=router;