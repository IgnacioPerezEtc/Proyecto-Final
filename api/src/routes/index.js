const { Router } = require('express');
const routeHotel = require('./hotel routes');
const router = Router();


router.use ('/hotels', routeHotel)

module.exports = router;
