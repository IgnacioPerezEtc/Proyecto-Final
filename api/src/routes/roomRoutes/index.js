const { Router } = require('express');

const router = Router();

router.get ("/", async (req, res)=>{

});

router.get ("/:id", async (req, res)=>{
const {id}=req.params;

try {
    if (id){
        res.status(200).send(`Traigo el room con id ${id}`)
    } else {
       res.status (200).send(`necesito un id`)
    }
} catch (error) {
    return res.status(404).send({error:error.message});
}
});

router.post ("/", async (req, res)=>{
const newRoom= req.body;
try {
    return  res.status(200).send("Room created succesfully!");
} catch (error) {
    return res.status(404).send({error:error.message});
}
});

router.put ("edit/:id", async (req,res)=>{
const {id} = req.params;
try {
    return res.status(200).send("Room actualizado");
} catch (error) {
    return res.status(404).send({error:error.message});
    
}
})



module.exports = router;