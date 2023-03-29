const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: true,
    // },
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        // required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    // isStudent: {
    //     type: Boolean,
    //     default: false,
    // },
    isTutor: {
        type: Boolean,
        // default: false,  
    },
    
});



const UserModel = mongoose.model('UserModel', userSchema);



module.exports = UserModel;

