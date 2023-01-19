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
    res.status (404).send('Hay error!!')
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
        res.status(400).send("Hotel no found in the Data");
    }
    
});

module.exports = router;