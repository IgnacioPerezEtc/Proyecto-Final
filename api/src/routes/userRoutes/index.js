const { Router } = require('express');
const { getAllUsers, getUserById, postUser, putUser, deleteUser } = require('../../controllers/userController');

const router = Router();

router.get("/", async (req, res) => {
    try {
        const allUsers = await getAllUsers();
        return res.status(200).send(allUsers);
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await getUserById(id);
        return res.status(200).send(user);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const newUser = req.body;
        const createUser = await postUser(newUser);
        return res.status(200).send(createUser);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put("/edit/:id", async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
        if(id){
            await putUser(id, data);
            return res.status(200).send("Updated user");
        }
        else {
            return res.status(200).send("Id needed");
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