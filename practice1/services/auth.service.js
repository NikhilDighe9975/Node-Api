const mongoose = require('mongoose');
const UserSchema = require('../models/user.schema');

const AuthService = {
    login: async (username, password) => {
        try {
            const user = await UserSchema.findOne({"username": username, "password": password});
            console.log('In Login API');
            console.log(user);
            return user;
        } catch (error) {
            console.error(error);
            throw error; 
        }
    }
}

module.exports = AuthService;





