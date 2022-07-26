import mongoose from "mongoose";

//FOR MONGODB
const User =  new  mongoose.Schema({
    name :{type : String, required: true},
    email :{type: String, required: true},
    contact :{type: Number, required: true},
    })

//export default mongoose.model('User',  User);

 const User1 =mongoose.model('User',  User);

 export default User1 