const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
   
    description:{
        type:String,
        required:true
    },

    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})
const Blog = mongoose.model("BlogDetails",BlogSchema);
module.exports=Blog;