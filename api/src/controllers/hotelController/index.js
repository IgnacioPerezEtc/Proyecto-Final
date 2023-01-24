const { Hotel, Room } = require("../../db");

module.exports = {

    listHotel: async function (name) {

        let array = [];

        let responseFromDB = await Hotel.findAll();

        array = [...responseFromDB];

        if (name) {
            let findHotel = array.filter(hotel => hotel.name.includes(name.toLowerCase()));

            if (findHotel.length > 0) {
                return findHotel;
            } else {
                throw new Error(`Searched Hotel not found with name: ${name}`)
            }
        }

        return array;
    },

    detailHotel: async function (id) {

        let arrayDetail = [];

        id = parseInt(id);

        let responseFromDB = await Hotel.findByPk(id);

        if (responseFromDB.name) {
            let findRoomsByIdHotel = await Room.findAll({
                where: {
                    hotelId: id,
                }
            })

            responseFromDB.dataValues.showRooms = findRoomsByIdHotel;

            arrayDetail.push(responseFromDB);

            return arrayDetail;

        } else {

            throw new Error(`Searched Hotel with id ${id} not found`)

        }

    },

    newHotel: async function (body) {
        const { name, rooms, location, description, parking, pictureHome, pictureDetail, rating, languages, category } = body;
        body.name = name.toLowerCase();

        if (!name || !rooms || !location || !description || !pictureHome || !rating || !languages || !category) {

            throw new Error("Incomplete data")

        } else {

            const newHotel = await Hotel.create(body);

            return ("New Hotel registred successfully");
        }
    }

}