const { Reservation, Room, Hotel } = require("../../db");

module.exports = {

    reservationByEmail: async function (email) {
        console.log(email)
        let array = [];

        let responseFromDB = await Reservation.findAll({
            include: {
                model: Room,
                include: {
                    model: Hotel
                }
            },
            where: {
                userEmail: email
            }
        },
        );

        array = [...responseFromDB];

        if (array.length) {
            return array;
        } else {
            throw new Error(`User with email ${email} has not reservations yet`);
        }
    },

    newReservation: async function (body) {
        const { people, adults, children, roomId } = body;
        body.people = parseInt(people);
        body.adults = parseInt(adults);
        body.children = parseInt(children);
        body.roomId = parseInt(roomId);

        const newReservation = await Reservation.create(body);

        return ("New Reservation registred successfully");
    }
}