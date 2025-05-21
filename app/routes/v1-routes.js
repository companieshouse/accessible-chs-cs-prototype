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

module.exports=router;