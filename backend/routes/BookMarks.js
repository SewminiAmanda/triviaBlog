const express = require('express');
const router = express.Router();
const Bookmark = require('../models/Bookmark.js'); // Corrected model import
const Post = require('../models/blogPost.js');

router.post('/bookmark', async (req, res) => {
    try {
        const { userId, blogPostId } = req.body; // Access parameters from req.body

        // Check if the bookmark already exists
        const existingBookmark = await Bookmark.findOne({ user: userId, blogPost: blogPostId });
        if (existingBookmark) {
            await Bookmark.findByIdAndDelete(existingBookmark._id);
            return res.status(200).json({ message: "Bookmark deleted successfully" });
        }

        // Create a new bookmark
        const newBookmark = new Bookmark({
            user: userId,
            blogPost: blogPostId
        });
        await newBookmark.save();

        res.status(201).json(newBookmark); // Respond with the created bookmark
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});





// Get all bookmarks for a user by user ID
router.get('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;

        // Find all bookmarks for the user
        const bookmarks = await Bookmark.find({ user: userId }).populate('blogPost');

        res.status(200).json(bookmarks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});


module.exports = router;
