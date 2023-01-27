const { Router } = require('express');
const routeHotel = require('./hotel routes');
const routeReviews = require('./reviewRoutes');
const routeUser = require('./userRoutes');
const routeRoom = require('./roomRoutes')
const routePayment = require('./paymentRoutes')
const router = Router();


router.use ('/hotels', routeHotel);
router.use ('/reviews', routeReviews);
router.use ('/user', routeUser);
router.use ('/rooms', routeRoom);
router.use('/payment', routePayment);

module.exports = router;
