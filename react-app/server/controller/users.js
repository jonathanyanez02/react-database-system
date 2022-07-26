////////////Route logic for requests/////////////////

import express from "express";
import { v4 as uuid } from "uuid";
import User1 from "../models/user.js";
const router = express.Router();

let users = [];
let User = User1;

//////
//CREATES A NEW USER(WORKS)
export const POST = async (req, res) => {

    const User = new User1({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact

    })

    console.log(User);

    await User.save()
        .then(data => {
            // res.send("User has been added");
            res.json(data)
            users.push({ ...User, id: uuid() });

            console.log(data)
        })
        
        .catch(error => {
            res.json(error)
        })
}


//Creates user with POST method
export const createUser = (req, res) => {
    const user = req.body;

    res.send("User has been added");
}


//DELETES A USER (WORKS)
export const deleteUser = (req, res) => {

    User.findByIdAndRemove({ _id: req.params.id }).then(data => {
        if (!data) {
            res.status(404).send('Cannot Delete with ${id}. ID is wrong')
        } else {
            res.send(
                'User was deleted successfully!'
            )
        }
    })
        .catch(err => {
            res.status(500).send(
                "Could not delete User with id"
            );
            console.log(User);
        })


    //res.send(User,"User has been deleted");
    //users = users.filter((User1) => User1.id !== req.params.id);


    /*  const id = req.params.id;
      try{
          const user2 = User.findById(req.params.id);
          user2.remove();
          res.send({data: true})
         // 
      } catch{
          res.status(404).send({error: "User not found"});
      }
  

 */  // res.send("User has been deleted");

}

export const updateUser = (req, res) => {
    // const user = users.find((user) => user.id === req.params.id);
    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: 'Cannot Update user with ${id}. User is not found!' })
            } else {
                res.send(data)
            }

        })
        .catch(err => {
            res.status(500).send({ message: "Error Update user information" })

        })
    /* User1.findById(id);
     User.name = req.body.name
     User.email = req.body.email
     User.contact = req.body.contact
 
     console.log(User.name);
     //User = users.filter((user) => user.id === req.params.id);
 */



}



//GETS ALL USERS(WORKING)
export const getUsers = async (req, res) => {
    res.send(await User1.find());
};

//GETS A USER (WORKING)
export const getUser = async (req, res) => {


    await User.find({ _id: req.params.id }).then(data => {
        if (!data) {
            res.status(404).send('Cannot find id')
        } else {
            res.json(data)

        }
    })
        .catch(err => {
            res.status(500).send(
                "Could not find user"
            );
            console.log(User);
        })




};


