
const express = require('express');
const { databaseObject, client } = require('../database/mongoConnectivity');
const loginRouter = express.Router();

loginRouter.post('/', async (req, res) => {
    global.socket[req.body.phoneNumber] = req.body.socketID; 
    // let existedUser = { 'phoneNumber' : req.body.phoneNumber};
    // console.log(existedUser);
    // await client.db('chat-database').collection('Users').findOne(existedUser, (err, result) => {
    //     if(err) throw err;
    //     console.log( "name : ",result);
    // })  
    res.send("This is login post");
});
loginRouter.post('/newUser', (req, res) => {
    global.socket[req.body.phoneNumber] = req.body.socketID; 
    let newUser = {
        name : req.body.userName,
        phoneNumber: req.body.phoneNumber
    }
    console.log(newUser)
    //inserting the user info to database
    client.db('chat-database').collection('Users').insertOne(newUser, (err, result) => {
        if(err) throw err;
        console.log("successful", result);
    })
    res.send("This is new user login post");
});
loginRouter.get('/', (req, res) => {
    res.send("This is login get");
});
loginRouter.get('/auth', (req, res) => {
    res.send("This is login authenticator router");
});

module.exports = loginRouter;