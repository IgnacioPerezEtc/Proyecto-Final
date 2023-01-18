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
    const {id} = req.params;
    const allHotels = await getAllHotels();  
    const hotel = allHotels.filter (el => el.id == id);
    if (hotel.lenght){
        res.status(200).json(hotel);
    } else {
        res.status(400).send("Hotel no found in the Data");
    }
});

module.exports = router;