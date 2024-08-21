const { Router } = require("express");
const {SignUpAuth, isThere} = require("../Middlewares/Auth");
const { user } = require("../DB");


const route = Router();

route.post("/", SignUpAuth, isThere, async(req, res) => {
    const data = {
        UserName: req.body.UserName,
        Email: req.body.Email,
        Password: req.body.Password
    }

    user.create(data).then(() => {
        res.send("User is created")
    }).catch((e) => {
        res.status(400).json({
            msg: "Something went wrong!" + e
        })
    })

})

module.exports = route;