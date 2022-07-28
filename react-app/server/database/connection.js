////CREATES THE CONNECTION TO THE MONGODB DATABASE
import mongoose from "mongoose";

const connectDB = async () => {
//ATTEMPTS TO CONNECT TO DATABASE AND IF IT FAILS, IT CATCHES THE ERROR
    try {
        const con = await mongoose.connect(process.env.REACT_APP_MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB connected: ${con.connection.host}`);

    } catch (err) {
        console.log(err);
        process.exit(1);
    }

}
export default connectDB  //EXPORTS THE CONNECTION FUNCTION

