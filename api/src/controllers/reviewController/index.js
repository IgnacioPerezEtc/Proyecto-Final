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
    try {
        await Commentary.create(newReview);
        return 'Review done';
        
    } catch (error) {
        return error.message;
    }
};

async function putReview(data) {
    try {
        await Commentary.update(data,
            {
                where: { 
                    userEmail: data.userEmail,
                    hotelId: data.hotelId }
            });
        return 'Update'
    } catch (error) {
        return error.message;
    }
};

async function deleteReview(id) {};

module.exports = { getReview, postReview, putReview, deleteReview };