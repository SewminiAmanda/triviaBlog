const { ObjectId } = require('mongodb');
const Bookmark = require('./Bookmark.js')

const mongoose = require('mongoose');
const blogPostSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
        
    },
    photo:{
        type:String,
        required:false,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    updatedAt:{
        type: Date,
        default: Date.now,
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    postedBy: {
        type: ObjectId,
        ref: "User",
        required: true 
    }
});

blogPostSchema.pre('findOneAndDelete', async function (next) {
    try {
        const doc = await this.model.findOne(this.getFilter());
        if (doc) {
            await Bookmark.deleteMany({ blogPost: doc._id });
        }
        next();
    } catch (error) {
        console.error('Error deleting bookmarks:', error);
        next(error);
    }
});

const blogPost =mongoose.model('blogPost',blogPostSchema);

module.exports=blogPost;