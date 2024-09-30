const jwt=require("jsonwebtoken");

function generateToken(user_id){
   return jwt.sign({user_id},"socket",{
    expiresIn:"30d",
   })
};

module.exports=generateToken;