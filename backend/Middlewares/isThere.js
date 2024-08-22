const jwt = require("jsonwebtoken");
const { user } = require("../DB");
require("dotenv").config();

async function isThere(req,res,next){
    const data = {
        UserName: req.body.UserName,
        Password: req.body.Password
    }

    let token = req.headers.authorization;

    token = token.split(" ")[1];
    

    try{
        const islogged = jwt.verify(token, process.env.PASSWORD);        
        req.UserName = islogged.UserName

        await user.findOne({UserName: req.UserName}).then((doc) => {
            req.UserID = doc._id
            
        })

        next();
    }
    catch(e){
        res.status(401).json({msg: "Session is over! Login Agaian " + e})
    }

}

module.exports = isThere;