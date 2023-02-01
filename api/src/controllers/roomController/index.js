const {Room, Hotel} = require ("../../db");


module.exports = {

    listRoom: async function () {
        let array = [];

        let infoDb = await Room.findAll({ include: {
            model: Hotel
        }});
        
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

        let infoDb = await Room.findByPk(id, {
            include: {
                model: Hotel
            }
        });
        
        if (infoDb.numRoom) {

            arrayDetail.push(infoDb);

            return arrayDetail;

        } else {
            throw new Error(`Searched Room with id ${id} not found`)
        }
    },

    newRoom: async function (body){

        const { numRoom, numPeople, maxAdult, maxChild, specialties, value, hotelId} =body;

        body.numPeople = parseInt (numPeople);
        body.maxAdult = parseInt(maxAdult);
        body.maxChild = parseInt(maxChild);
        body.value = parseFloat(value);
        body.hotelId = parseInt(hotelId);

        if (!numRoom || !numPeople || !maxAdult || !maxChild || !specialties || !value || !hotelId) {
            
            throw new Error("Incomplete Data")

        } else {
            
            const newRoom = await Room.create(body);

            return ("New Room regristed successfully");
        }
    }
}