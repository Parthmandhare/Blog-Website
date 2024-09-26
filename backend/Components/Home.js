const { Router } = require("express");
const isThere = require("../Middlewares/isThere");

const route = Router();

route.get("/logout", (req, res) => {
    res.cookie("cookie", "");
    res.status(200).json({
        msg: "Logged out!"
    })
})
route.get("/", isThere, (req,res) => {
    res.status(200).json({
        msg: "Yes"
    })
});



module.exports = route;