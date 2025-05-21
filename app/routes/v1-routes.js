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
router.post('/v1check-trading-status', function (req, res) {

    res.redirect('/v1/tasklist')
})



// router.post('/v1/check-trading-status', function (req, res) {
//   const action = req.body.action;
//   if (action === 'submit-next') {
//     res.redirect('/address-lookup/static-list-of-addresses');
//   } else if (action === 'return') {
//     res.redirect('/tasklist');
//   } else {
//     res.redirect('/v1/check-trading-status');
//   }
// })

module.exports=router;