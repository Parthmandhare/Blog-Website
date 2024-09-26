const { Router } = require("express");
const isThere = require("../Middlewares/isThere");
const { user, posts } = require("../DB");

const route = Router();

route.get("/dashboard", isThere, async(req, res) => {
    await user.findOne({UserName: req.UserName}).then((doc) => {
        res.status(200).json({
            user: doc
        })
    }).catch((e) => {
        res.status(404).json({msg: "No User Available!"})
    })
})

route.get("/:userId", async(req, res) => {

    const userId = req.params.userId;
    

    await user.findOne({_id: userId}).then((doc) => {
        console.log(doc);
        
        res.status(200).json({
            user: doc
        })
    }).catch((e) => {
        res.status(404).json({msg: "No User Available!"})
    })
})

module.exports = route;