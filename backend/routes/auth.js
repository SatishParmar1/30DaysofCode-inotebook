const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

// create a user
router.post('/', [
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

      user = await User.create({
         name: req.body.name,
         password: req.body.password,
         email: req.body.email,
      });

      res.json({ message: "User created successfully" });
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while creating the user" });
   }
});

module.exports = router;
