const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.verifyUser = (req,res,next) =>{
    const token = req.cookies.token;
    if(!token){
        return res.json({status:"false"});
    }
    jwt.verify(token,process.env.TOKEN_KEY,async(err,data)=>{
        if(err){
            return res.json({status:false});
        }else{
            const user = await User.findById(data.id);
            if(user) {
                req.user = user;
                next();
            } else{
                return res.status(401).json({status:false});
            }
        }
    })
}