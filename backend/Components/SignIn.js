const { Router } = require("express");
const {SignInAuth} = require("../Middlewares/Auth")


const route = Router();

route.get("/", SignInAuth, (req, res) => {
    res.send("Hello from Signin.js")
})

module.exports = route;