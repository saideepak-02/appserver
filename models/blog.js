const mongoose=require("mongoose");

const blogSchema=new mongoose.Schema({
    title:String,
    content:String,
    author:String,
    image:String
})

let blogModel=mongoose.model("blogApp",blogSchema,"blogApp");

module.exports=blogModel;