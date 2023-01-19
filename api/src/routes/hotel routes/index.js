const { Router } = require('express');

const router = Router();

router.get ("/", async (req, res)=>{
    const {name} = req.query;
   // const allHotels = await getAllHotels(); //variable getAllHotels hay que crearla en controllers
   try {
    if (name) {
     //   const hotel = await allHotels(name); //recibe parametro de controllers
       
     return res.status(200).send(`tengo el hotel ${name}`)
     //   return res.status(200).send(hotel) 
    } else {
        res.status(200).send('Tengo todos los hoteles')
        //res.status (200).send(allHotels) 
    }
   } catch (error) {
    return res.status(404).send({error:error.message});
   }
    
});

router.get ("/:id", async (req, res)=>{
    const {id} = req.params; // pasar de string a enteroe en controllers
    //const allHotels = await getAllHotels();  
    //const hotel = allHotels.filter (el => el.id == id); // hacer en controllers
    try {
        if (id){
            res.status(200).send(`Traigo el hotel con id ${id}`)
        } else {
           res.status (200).send(`necesito un id`)
        }
    } catch (error) {
        return res.status(404).send({error:error.message});
    }
    
});

router.post ("/", async (req, res) =>{
    const newHotel = req.body;
    try {
        //const createHotel = await hotelCreate(newHotel); //crear función en controllers
       return  res.status(200).send("Hotel created succesfully!");
    } catch (error) {
        return res.status(404).send({error:error.message});
    }
})

router.put ("/edit/:id", async (req, res) =>{
    const {id} = req.params;
    try {
       // const putHotel = await editHotel(id, req.body); //crear función en controllers
        return res.status(200).send("Hotel actualizado");
    } catch (error) {
        return res.status(404).send({error:error.message});
    }
})

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