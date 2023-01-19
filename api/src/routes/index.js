const { Router } = require('express');
const routeHotel = require('./hotel routes');
const routeReviews = require('./reviewsRouter');
const router = Router();


router.use ('/hotels', routeHotel)
router.use ('/reviews', routeReviews)

module.exports = router;
