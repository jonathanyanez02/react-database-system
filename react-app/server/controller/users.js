////////////Route logic for requests/////////////////

import express from "express";
import User1 from "../models/user.js";

//USES USER1 FROM MONGOOSE SCHEMA
let User = User1;


//CREATES A NEW USER
export const postUser = async (req, res) => {

    const User = new User1({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact

    })

    console.log(User);

    await User.save()
        .then(data => {

            res.json(data)
            console.log(data)
        })


        .catch(error => {
            res.json(error)
        })
}

//GETS ALL USERS
export const getUsers = async (req, res) => {
    res.send(await User1.find());
};

//GETS A USER
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
}

export const updateUser = (req, res) => {

    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Update user with ${id}. User is not found!` })
            } else {
                res.send(data)
            }

        })
        .catch(err => {
            res.status(500).send({ message: "Error updating user information" })

        })
}








