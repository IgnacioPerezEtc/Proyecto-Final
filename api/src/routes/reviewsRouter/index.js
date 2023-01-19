const { Router } = require('express');
const { Commentary } = require('../../db');

const router = Router();

router.post('/', async (req, res) => {
    try {
        const { idUser, idHotel, ratingComment } = req.body;
        if(ratingComment) {
            const newCommentary = await Commentary.create(req.body);
            await newCommentary.addUsers(idUser);
            await newCommentary.addHotels(idHotel);
            res.send(newCommentary)
        }
        else res.status(404).send(error.message)
        
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = router;