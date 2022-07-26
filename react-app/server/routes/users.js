import express from "express";
import { getUsers, createUser, getUser, deleteUser, updateUser, POST  } from "../controller/users.js"
//import Userdb from '../models/user.js'

const router = express.Router(); //SETS EXPRESS ROUTER AS router

router.get("/users", getUsers);
//router.post("/user", createUser); // Old route
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.post("/user", POST);

//FOR MONGO DB
//router.post("/user",POST);



export default router;