const asyncHandler = require("express-async-handler");
const User = require("../models/users");

 




// Register User
const registerUser = asyncHandler(async (req, res) => {
    const {   firstName,  lastName, email, password, phoneNumber } = req.body;
  
    // Validation
    if (!firstName|| !email || !lastName || !password || !phoneNumber ) {
      res.status(400);
      throw new Error("Please fill in all required fields");
    }
    if (password.length < 6) {
      res.status(400);
      throw new Error("Password must be up to 6 characters");
    }
  
    // Check if user email already exists
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400);
      throw new Error("Email has already been registered");
    }
  
  
    // Create new user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      phoneNumber})
    
      if (user) {
        const { _id, name, email, phone, address} = user;
        res.status(201).json({
          _id,
          name,
          email,
          phone,
          address,
         token
        });
      } else {
        res.status(400);
        throw new Error("Invalid user data");
      }
    
});
//Login user
const login= asyncHandler(async(req,res)=>{
    const{email,password} =req.body
    //validation
    if(!email || !password){
        res.status(400);
      throw new Error("Please add email and password");
    } 
    //check if user exist
    const user =await User.findOne({email})
    if(!user){
        res.status(400);
        throw new Error("User not found");
    }
  
    if (user && passwordIsCorrect) {
        const { _id, name, email, phone, address} = user;
        res.status(200).json({
          _id,
          name,
          email,
          phone,
          address,
          token
       
        });
      } else {
        res.status(400);
        throw new Error("invalid email or password");
      }
 });

    

module.exports = {
     registerUser,
     login,
    

    }