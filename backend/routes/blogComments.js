const express = require('express');
const router=express.Router();
const User = require('../models/User.js');
const Post=require('../models/blogPost.js');
const Comment = require('../models/blogComment.js');
const verifyToken = require('../middleware/verifyToken.js');


//Create 
router.post("/create" ,async (req, res) => {
    try{
        const newComment = new Comment(req.body);
        const savedComment=await newComment.save();
        res.status(200).json(savedComment);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;