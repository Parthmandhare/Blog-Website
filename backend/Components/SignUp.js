const { Router } = require("express");
const {SignUpAuth} = require("../Middlewares/Auth")

const route = Router();

route.post("/", SignUpAuth, (req, res) => {
    res.send("Hello from Signup.js")
})

module.exports = route;