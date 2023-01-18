const { Router } = require('express');
const { Review } = require('../../db');

const router = Router();

// router.post('/', async (req, res) => {
//     try {
//         const { idName, idHotel, rating } = req.body;
//         if(rating) {
//             const newReview = await Review.create(req.body);
//             await newReview.addNames(idName);
//             await newReview.addHotels(idHotel);
//             res.send(newReview)
//         }
//         else res.status(404).send(error.message)
        
//     } catch (error) {
//         res.status(404).send(error.message)
//     }
// })

module.exports = router;