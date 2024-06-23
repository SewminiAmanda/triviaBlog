const express = require('express');
const router=express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const verifyToken = require('../middleware/verifyToken');


//Delete
router.delete("/:userId", async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        //delete all posts and comments of the user
       // await Post.deleteMany({username: req.params.id});
       // await Comment.deleteMany({username: req.params.id});
       res.status(200).json("User has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/auth/user",  (req, res) => {
    res.json(req.user);
  });



// Get User
router.get("/:userId", async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.status(200).json(user); // Sending user instead of info
    } catch (err) {
        res.status(500).json(err);
    }
});


// Update User
router.put("/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;
        const updatedUser = req.body; 

        const user = await User.findByIdAndUpdate(userId, updatedUser, { new: true });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});





module.exports=router;