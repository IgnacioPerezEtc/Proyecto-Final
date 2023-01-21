const { Router } = require('express');
const hotelControllers = require("../../controllers/hotelController");

const router = Router();

router.get("/", async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const result = await hotelControllers.listHotel(name);
            return res.status(200).json(result);
        } else {
            const result = await hotelControllers.listHotel();
            return res.status(200).json(result);
        }
    } catch (error) {
        return res.status(404).send({ error: error.message });
    }

});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        if (id) {
            const result = await hotelControllers.detailHotel(id);
            return res.status(200).json(result);
        } else {
            throw new Error("Id is required");
        }
    } catch (error) {
        return res.status(404).send({ error: error.message });
    }

});

router.post("/", async (req, res) => {
    const newHotel = req.body;
    try {
        const create = await hotelControllers.newHotel(newHotel)
        return res.send(create)
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

// router.put("/edit/:id", async (req, res) => {
//     const { id } = req.params;
//     try {
//         // const putHotel = await editHotel(id, req.body); //crear función en controllers
//         return res.status(200).send("Hotel actualizado");
//     } catch (error) {
//         return res.status(404).send({ error: error.message });
//     }
// })

// router.delete ("/delete/:id", async (req, res)=>{
//     const {id} = req.params;
//     try {
//         //const deletHotel = await hotelDelete (id); //crear delete
//         return res.status(200).send("Hotel eliminado")
//     } catch (error) {
//         return res.status
//     }
// })

module.exports = router;