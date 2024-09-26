const { Router } = require("express");
const {SignInAuth} = require("../Middlewares/Auth");
const { user } = require("../DB");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const route = Router();

route.post("/", SignInAuth, async(req, res) => {

    await user.findOne({UserName: req.body.UserName}).then(async (doc) => {
        
        if(doc == null){
            res.status(400).json({msg: "User not found"});
        }else{
            if(doc.Password == req.body.Password){

                const data = {
                    UserName: req.body.UserName,
                    Password: req.body.Password
                }

                const token = jwt.sign(data, process.env.PASSWORD);

                res.cookie("cookie" , token)
                
                res.status(200).json({
                    msg: "User is logged",
                    token: token
                })
            }else{
                res.status(401).json({msg: "Incorrect Password!"})
            }
        }
    })

})

module.exports = route;