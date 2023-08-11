const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// create a user
router.post('/signupuser', [
   body('name', 'Enter your correct name').isString(),
   body('email', 'Enter your correct email').isEmail(),
   body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {
   const result = validationResult(req);
   if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
   }

   try {
      let user = await User.findOne({ email: req.body.email });
            if (user) {
         return res.status(400).json({ error: "A user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
         secpass =await bcrypt.hash(req.body.password,salt);
     
         user = await User.create({
         name: req.body.name,
         password: secpass,
         email: req.body.email,
      });
         const data={
            user:{
               id : user.id
            }
            }
            const JWT_SECRET =  "hello dosto";
      const authtoken = jwt.sign(data,JWT_SECRET);
      const response = {
         authtoken,
         user
      };
   
      res.json(response);

    
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while creating the user" });
   }
});

router.post('/loginuser', [
   body('email', 'Enter your correct email').isEmail(),
   body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {
   const result = validationResult(req);
   if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
   }

const{email,password} = req.body;
try{
   let user = await User.findOne({ email });
   if(!user){
      return res.status(400).json({error: "please try to login with correct text"});
   }  
      const passwordCompare = await bcrypt.compare(password,user.password);
      if(!passwordCompare){
      return res.status(400).json({error: "please try again to login with correct text"}); 
      }
      const data={
         user:{
            id : user.id
         }
         }
         const JWT_SECRET =  "hello dosto";

   const authtoken = jwt.sign(data,JWT_SECRET);

   res.json(authtoken);



}catch(error){
   console.error(error);
   res.status(500).json({ error: "An error occurred while creating the user" });
}

});
module.exports = router;
