const { Reservation, Room, Hotel, conn } = require("../../db");
const { QueryTypes } = require('sequelize');
module.exports = {

    allReservations: async function() {
        
        const responseFromDB = await conn.query(
            `select  count(h.name) as reservations, h.name from reservations res inner join rooms r on  r.id=res."roomId" inner join hotels h on h.id=r."hotelId" group by h.name`,
            { type: QueryTypes.SELECT });

        return responseFromDB;
    },

    reservationsPerMonth: async function() {
        
        const responseFromDB = await conn.query(
            `select  to_char("startDate", 'month') as "month", count(date_part('month',"startDate")) as reservations  from reservations group by to_char("startDate", 'month')`,
            { type: QueryTypes.SELECT });

        return responseFromDB;
    },

    reservationsPerCountry: async function() {
        
        const responseFromDB = await conn.query(
            `select  count(h.location) as reservations, h.location from reservations res inner join rooms r on  r.id=res."roomId" inner join hotels h on h.id=r."hotelId" group by h.location`,
            { type: QueryTypes.SELECT });

        return responseFromDB;
    },

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
    },

    putReservation: async function (id, data) {
        try {
          await Reservation.update(data, {
              where: {
                  id: id
              }
          })
          return "Updated Reservation"
          
        } catch (error) {
          return error.message;
        }
      }
}