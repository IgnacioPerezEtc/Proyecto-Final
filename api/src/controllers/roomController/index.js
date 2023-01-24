const {Room, Hotel} = require ("../../db");


module.exports = {

    listRoom: async function () {
        let array = [];

        let infoDb = await Room.findAll();
        
        array = [...infoDb];

        if (array.length) {
            return array;
        } else{
            throw new Error("Rooms not found")
        }
    }, 

    detailRoom: async function (id) {
        let arrayDetail = [];

        id = parseInt(id);

        let infoDb = await Room.findByPk(id);
        
        if (infoDb.numRoom) {
            
            let findHotelById = await Hotel.findByPk(infoDb.hotelId);   
            
            infoDb.dataValues.currentHotel = findHotelById;

            arrayDetail.push(infoDb);

            return arrayDetail;

        } else {
            throw new Error(`Searched Room with id ${id} not found`)
        }
    },

    newRoom: async function (body){

        const { numRoom, numPeople, maxAdult, maxChild, specialties, availableDate, value, hotelId} =body;

        body.numRoom = parseInt(numRoom);
        body.numPeople = parseInt (numPeople);
        body.maxAdult = parseInt(maxAdult);
        body.maxChild = parseInt(maxChild);
        body.value = parseFloat(value);
        body.hotelId = parseInt(hotelId);

        if (!numRoom || !numPeople || !maxAdult || !maxChild || !specialties || !availableDate || !value || !hotelId) {
            
            throw new Error("Incomplete Data")

        } else {
            
            const newRoom = await Room.create(body);

            return ("New Room regristed successfully");
        }
    }
}