/////ROUTER FOR CONTROLLER.JS FILE/////
import express from "express";
import { getUsers, getUser, deleteUser, updateUser, postUser  } from "../controller/users.js" //IMPORTS CONTROLLER FUNCTIONS FROM CONTROLLER


const router = express.Router(); //SETS EXPRESS ROUTER AS router

router.get("/users", getUsers);     //GETS ALL USERS
router.post("/user", postUser);     //CREATES A USER
router.get("/user/:id", getUser);   //GETS SINGLE USER BY ID 
router.put("/user/:id", updateUser);  //UPDATES USER BY ID
router.delete("/user/:id", deleteUser); //DELETES USER BY ID





export default router; //EXPORTS THE ROUTER