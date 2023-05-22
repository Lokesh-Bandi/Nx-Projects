
const express = require('express');
const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
    global.socket[req.body.phoneNumber] = req.body.socketID;
    res.send("This is login post");
});
loginRouter.get('/', (req, res) => {
    res.send("This is login get");
});
loginRouter.get('/auth', (req, res) => {
    res.send("This is login authenticator router");
});

module.exports = loginRouter;