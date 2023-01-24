const { User } = require('../../db');

async function getAllUsers() {
    try {
        const allUsers = await User.findAll();
        return allUsers;
        
    } catch (error) {
        return error.message;
    }
};

async function getUserById(id) {
    try {
        const user = await User.findOne({
            where: {
                id: id
            }
        })
        return user;
        
    } catch (error) {
        return error.message;
    }
};

async function postUser(newUser) {
    try {
        const createUser = await User.create(newUser);
        return createUser;
        
    } catch (error) {
        return error.message;
    }
};

async function putUser(id, data) {
    try {
        await User.update({
            name: data.name,
            lastName: data.lastName,
            age: data.age,
            phone: data.phone,
            email: data.email,
            nationality: data.nationality
        },
        {
            where: { id: id }
        });
    } catch (error) {
        return error.message;
    }
};

async function deleteUser() {};

module.exports = { getAllUsers, getUserById, postUser, putUser, deleteUser };