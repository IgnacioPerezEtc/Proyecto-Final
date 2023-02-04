const { User } = require('../../db');

const getFavoriteHotels = async (req, res) => {
  const { id } = req.params;
  try {
    const favsIds = await User.findByPk(id, {
      attributes: ['favoriteHotels']
    });

    res.json(favsIds["favoriteHotels"])

  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const putFavoriteHotels = async (req, res) => {
  try {
    const { email, favoriteHotels } = req.body
    if (email && favoriteHotels) {
      await User.update(
        { favoriteHotels: favoriteHotels, },
        { where: { email: email } }
      );

      return res.status(200).send("user's favorite hotels updated");
    }
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}


module.exports = {
  putFavoriteHotels,
  getFavoriteHotels,
}