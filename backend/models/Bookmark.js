const mongoose = require('mongoose');

const bookmarkSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    blogPost: { type: mongoose.Schema.Types.ObjectId, ref: 'blogPost' },
    createdAt: { type: Date, default: Date.now },
    
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;
