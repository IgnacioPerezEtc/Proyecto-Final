const { Router } = require('express');
const { putFavoriteHotels, getFavoriteHotels } = require("../../controllers/favoriteController");

const favoriteRouter = Router();

favoriteRouter.get("/:id", getFavoriteHotels);
favoriteRouter.put("/", putFavoriteHotels);

module.exports = favoriteRouter;