const {z, boolean} =  require("zod");
const { user } = require("../DB");

const SignUpSchema = z.object({
    UserName: z.string(),
    Email: z.string(),
    Password: z.string()
})

const SignInSchema = z.object({
    UserName: z.string(),
    Password: z.string()
})

async function isThere(req,res,next){


    await user.findOne({UserName: req.body.UserName}).then((doc) => {
        
        if(doc != null){
            res.status(400).json({msg: "User already exists"});
        }else{
            next();
        }
    })


}

function SignUpAuth(req,res,next){

    const isCorrect = SignUpSchema.safeParse({
        UserName: req.body.UserName,
        Email: req.body.Email,
        Password: req.body.Password
    })

    if(isCorrect.success){
       
         next();

    }else{
        res.status(401).json({msg: "Invalid Inputs"})
    }

}

function SignInAuth(req,res,next){

    const isCorrect = SignInSchema.safeParse({
        UserName: req.body.UserName,
        Password: req.body.Password
    })

    

    if(isCorrect.success){
        next();
    }else{
        res.status(401).json({msg: "Invalid Inputs"})
    }

}



module.exports = {SignUpAuth, SignInAuth, isThere};