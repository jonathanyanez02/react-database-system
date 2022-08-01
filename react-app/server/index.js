//SERVER FILE 
import dotenv from 'dotenv';//ALLOWS FOR USE OF ENVIRONMENT FILES FROM .ENV
import express  from "express";//IMPORTS EXPRESS MODULE
import morgan from 'morgan';//LOGS REQUESTS FROM SERVER
import cors from "cors";//MIDDLEWEAR THAT ALLOWS HTTP REQUESTS FOR WEB API
import router from "./routes/users.js "//IMPORTS ROUTES FOLDER
import connectDB from "./database/connection.js";//IMPORTS CONNECTIONS FOLDER

const app = express();
const PORT = process.env.REACT_APP_PORT||8080 ///SETS PORT TO 8080 FROM .ENV FILE

dotenv.config();
connectDB();//CONNECTS TO DATABASE FROM CONNECTION.JS



app.use(morgan("tiny"));//LOGS REQUESTS
app.use(express.json());//JSON PARSING
app.use(cors());//CALLS CORS



//app.use("/", userRoutes);  //from old app

app.use("/",router); //HOME ROUTE



app.get("/", (req,res)=> res.send("Server is running")); //RESPONDS WHEN SERVER IS RUNNING

app.all("*", (req,res)=> res.send("Route does not exist")); //RESPONDS WHEN A ROUTE DOESNT EXIST

app.listen(PORT,()=>console.log('server is listening on port: http://localhost:8080') ); //LOGS TO CONSOLE WHEN SERVER IS LISTENING ON PORT

