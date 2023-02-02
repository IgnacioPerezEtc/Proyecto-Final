const { Hotel, Room } = require("../../db");

module.exports = {
  listHotel: async function (name) {
    let array = [];

    let responseFromDB = await Hotel.findAll();

    array = [...responseFromDB];

    if (name) {
      let findHotel = array.filter((hotel) =>
        hotel.name.includes(name.toLowerCase())
      );

      if (findHotel.length > 0) {
        return findHotel;
      } else {
        throw new Error(`Searched Hotel not found with name: ${name}`);
      }
    }

    return array;
  },

  detailHotel: async function (id) {
    let arrayDetail = [];

    id = parseInt(id);

    let responseFromDB = await Hotel.findByPk(id, {
      include: {
        model: Room,
        as: "showRooms",
      },
    });

    if (responseFromDB.name) {
      arrayDetail.push(responseFromDB);

      return arrayDetail;
    } else {
      throw new Error(`Searched Hotel with id ${id} not found`);
    }
  },

  newHotel: async function (body) {
    const {
      name,
      rooms,
      location,
      description,
      position,
      parking,
      pictureHome,
      pictureDetail,
      rating,
      languages,
      category,
    } = body;
    body.name = name.toLowerCase();
    body.rooms = parseInt(rooms);
    body.rating = parseFloat(rating);
    body.category = parseInt(category);

    if (
      !name ||
      !rooms ||
      !location ||
      !description ||
      !pictureHome ||
      !rating ||
      !languages ||
      !category ||
      !position
    ) {
      throw new Error("Incomplete data");
    } else {
      const newHotel = await Hotel.create(body);

      return "New Hotel registred successfully";
    }
  },

  bulkCreate: async function (array) {
    await Hotel.bulkCreate(array);

    return "All Hotels in DB";
  },
};
