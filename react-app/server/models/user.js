import mongoose from "mongoose";

//CREATES A SCHEMA FOR OUR DATABASE CONNECTION
const User =  new  mongoose.Schema({
    name :{type : String, required: true},
    email :{type: String, required: true},
    contact :{type: Number, required: true},
    })


//SETS THE 'User' SCHEMA AS 'User1"
 const User1 =mongoose.model('User',  User);

 export default User1 