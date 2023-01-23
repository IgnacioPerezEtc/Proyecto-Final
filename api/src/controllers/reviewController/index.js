const { Commentary, User, Hotel } = require('../../db');

async function getReview() {
    try {
        const data = await Commentary.findAll();
        return data;
        
    } catch (error) {
        return error.message;
    }
};

async function postReview(newReview) {
    // try {
    //     const createReview = await Commentary.create(newReview);
    //     await createReview.addUsers(newReview.userId);
    //     await createReview.addHotels(newReview.hotelId);
    //     return createReview;
        
    // } catch (error) {
    //     return error.message;
    // }
};

async function putReview(id, info) {};

async function deleteReview(id) {};

module.exports = { getReview, postReview, putReview, deleteReview };