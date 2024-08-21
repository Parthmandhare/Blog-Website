const {z} =  require("zod");

const SignUpSchema = z.object({
    UserName: z.string(),
    Email: z.string(),
    Password: z.string()
})

const SignInSchema = z.object({
    UserName: z.string(),
    Password: z.string()
})

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



module.exports = {SignUpAuth, SignInAuth};