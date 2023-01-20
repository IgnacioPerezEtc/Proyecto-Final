const { Router } = require('express');
const routeHotel = require('./hotel routes');
const routeReviews = require('./reviewsRouter');
const routeUser = require('./userRoutes');
const router = Router();


router.use ('/hotels', routeHotel);
router.use ('/reviews', routeReviews);
router.use ('/user', routeUser);

module.exports = router;
