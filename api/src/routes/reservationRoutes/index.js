const { Router } = require('express');
const reservationController = require("../../controllers/reservationController");

const router = Router();

router.get('/', async (req, res) => {
    const { email } = req.query;
    try {
        if (email) {
            const result = await reservationController.reservationByEmail(email);
            return res.status(200).json(result);
        } else {
            throw new Error("User Email is required");
        }
    } catch (error) {
        return res.status(404).send({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    const newReservation = req.body;
    try {
        const create = await reservationController.newReservation(newReservation);
        return res.send(create);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

router.put("/edit/:id", async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
        const updated = await reservationController.putReservation(id, data);
        return res.status(200).send(updated);

    } catch (error) {
        return res.status(404).send({ error: error.message });
    }
})

module.exports = router;