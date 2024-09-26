const { Router } = require("express");
const {SignUpAuth, isThere} = require("../Middlewares/Auth");
const { user } = require("../DB");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const route = Router();

route.post("/", SignUpAuth, isThere, async(req, res) => {
    const data = {
        UserName: req.body.UserName,
        Email: req.body.Email,
        Password: req.body.Password
    }

    user.create(data).then(() => {

        const userData = {
            UserName: req.body.UserName,
            Password: req.body.Password
        }

        const token = jwt.sign(userData, process.env.PASSWORD);

        res.cookie("cookie" , token)

        res.status(200).json({
            token: token
        })

    }).catch((e) => {
        res.status(400).json({
            msg: "Something went wrong!" + e
        })
    })

})

module.exports = route;