const e = require('express');
const { User } = require('../../db');

async function getAllUsers() {
    try {
        const allUsers = await User.findAll();
        return allUsers;

    } catch (error) {
        return error.message;
    }
};

async function getUserById(email) {
    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        })
        return user;

    } catch (error) {
        return error.message;
    }
};

async function postUser(newUser) {
    try {
        const createUser = await User.findOrCreate({
            where: { email: newUser.email },
            defaults: newUser
        });
        return createUser;

    } catch (error) {
        return error.message;
    }
};

async function putUser(email, data) {
    try {
        await User.update(data,
            {
                where: { email: email }
            });
    } catch (error) {
        return error.message;
    }
};

async function deleteUser() { };

module.exports = { getAllUsers, getUserById, postUser, putUser, deleteUser };