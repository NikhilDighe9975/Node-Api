const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/learning');

const UserSchema = mongoose.model('user',{});
module.exports = UserSchema;







// const mongoose = require('mongoose');

// const bcrypt = require('bcrypt');

 

// mongoose.connect('mongodb://localhost:27017/nodeConnect');

 

// const userSchema = new mongoose.Schema({

//   username: {

//     type: String,

//     required: true,

//   },

//   password: {

//     type: String,

//     required: true,

//   },

// });

 

// // Middleware to hash the password before saving

// userSchema.pre('save', async function (next) {

//   try {

//     if (!this.isModified('password')) {

//       return next();

//     }

 

//     const salt = await bcrypt.genSalt(10);

//     const hashedPassword = await bcrypt.hash(this.password, salt);

//     this.password = hashedPassword;

//     next();

//   } catch (error) {

//     return next(error);

//   }

// });

 

//  module.exports = mongoose.model('User', userSchema);