const { Router } = require('express');
const roomController = require('../../controllers/roomController');

const router = Router();

router.get ("/", async (req, res)=>{

    try {
        const result = await roomController.listRoom();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(404).send({error:error.message});
    }

});

router.get ("/:id", async (req, res)=>{
const {id}=req.params;

try {
    if (id){
        const result = await roomController.detailRoom(id);
        res.status(200).json(result);
    } else {
       throw new Error("Id is required");
    }
} catch (error) {
    return res.status(404).send({error:error.message});
}
});

router.post ("/", async (req, res)=>{
const newRoom= req.body;
try {
    const create = await roomController.newRoom(newRoom)
    return  res.send(create);
} catch (error) {
    return res.status(404).send({error:error.message});
}
});

router.put ("/edit/:id", async (req,res)=>{
const {id} = req.params;
const data = req.body;
try {
    if(id) {
        const roomUpdated = await roomController.putRoom(id, data);
        return res.status(200).send(roomUpdated);
    }
} catch (error) {
    return res.status(404).send({error:error.message});
    
}
})

router.post("/bulk", async (req, res) => {
    const array = req.body;
    try {
        const createAll = await roomController.bulkCreate(array);
        return res.send(createAll);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})



module.exports = router;