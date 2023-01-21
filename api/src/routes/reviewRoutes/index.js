const { Router } = require('express');
const { Commentary } = require('../../db');
const { getReviews, postReview, putReview, deleteReview } = require('../../controllers/reviewController');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const reviews = await getReviews();
        res.send(reviews);
        
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const newReview = req.body;
        const createReview = await postReview(newReview);
        res.send(createReview);
        
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.put('/edit/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const info = req.body;
        const editedReview = await putReview(id, info);
        res.send(editedReview);
        
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedReview = await deleteReview(id);
        res.send(deletedReview);
        
    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = router;

// router.post('/', async (req, res) => {
//     try {
//         const { userId, hotelId, ratingComment } = req.body;
//         if(ratingComment) {
//             const newCommentary = await Commentary.create(req.body);
//             await newCommentary.addUsers(userId);
//             await newCommentary.addHotels(hotelId);
//             res.send(newCommentary)
//         }
//         else res.status(404).send(error.message)
        
//     } catch (error) {
//         res.status(404).send(error.message)
//     }
// })