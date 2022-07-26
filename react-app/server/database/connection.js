import mongoose from "mongoose";

const connectDB = async () => {
    //tries to connect to the databsae
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
export default connectDB

