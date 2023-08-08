import mongoose from "mongoose";
import autoincrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({

    firstName: String,
    lastName : String,
    userName: String,
    emailAddress: String,
    mobileNumber: Number,
    whatsAppNumber: Number,
    age: Number,
    address: String,
    city: String,
    state: String,
    country: String,
    pincode: Number,
    education: String,
    occupation: String,
    



});

autoincrement.initialize(mongoose.connection);
userSchema.plugin(autoincrement.plugin,'user');
const user = mongoose.model('user',userSchema);

export default user;