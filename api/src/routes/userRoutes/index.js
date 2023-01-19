const {Router} = require('express');

const router = Router();

router.get("/:id", async (req, res) => {
    const {id} = req.params;

    try {
        if(id){
            return res.status(200).send(`Traigo la info del usuario con ID ${id}`)
        }
        else {
            return res.status(200).send("Necesito id")
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

router.put("/edit/:id", async (req, res) => {
    const {id} = req.params;

    try {
        if(id){
            return res.status(200).send(`Actualizo la info del usuario con ID ${id}`)
        }
        else {
            return res.status(200).send("Necesito id")
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

router.delete("/delete/:id", async (req, res) => {
    const {id} = req.params;

    try {
        if(id){
            return res.status(200).send("Usuario eliminado")
        }
        else {
            return res.status(200).send("Necesito id")
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

module.exports = router;