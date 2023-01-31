const { Router } = require('express');
const { getReview, postReview, putReview, deleteReview } = require('../../controllers/reviewController');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const reviews = await getReview();
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

router.put('/edit', async (req, res) => {
    try {
        const data = req.body;
        const editedReview = await putReview(data);
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