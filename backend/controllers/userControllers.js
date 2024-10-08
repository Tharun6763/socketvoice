// userControllers.js
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt"); 
const jwt=require("jsonwebtoken");
const generateToken=require("../config/generateToken")


const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  

  

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token:generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the user");
  }
});


const authUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    console.log(req.body);
     
    const user=await User.findOne({email});
      console.log(
        "*************************************************************"
      );
      console.log(user)
      
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          pic: user.pic,
          token: generateToken(user._id),
        });
    }else{
        res.status(400);
        throw new Error("invalid user");
    }

});



module.exports = {authUser,registerUser}; // Ensure you export registerUser correctly
