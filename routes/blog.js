const express=require("express");
const BlogModel=require("../models/blog");
var ObjectId=require('mongodb').ObjectId;
const router=express.Router();

router.get("/all",async (req,res)=>{
 let blogs=await BlogModel.find();
 res.send(blogs);
})
router.post("/create",async (req,res)=>{
   let newBlog= new BlogModel(req.body);
   await newBlog.save();  
   console.log(req.body);
   res.send("new blog created");
})

router.delete('/deleteBlog/:id',async function(req,res){
   console.log(req.params);
   const deleteBlog=await BlogModel.deleteOne({"_id":new ObjectId(req.params.id)});
   res.send("blog deleted successfully");
   
})  

router.get("/blogById/:id",async function(req,res){
   let blog=await BlogModel.findOne({"_id":new ObjectId(req.params.id)});
   res.send(blog);
})

router.put("/edit/:id",async function(req,res){
   const updatedBlog=await BlogModel.findByIdAndUpdate({"_id":new ObjectId(req.params.id)},req.body,{upsert:true});
   res.send("blog updated successfully");
})

router.get("/searchByTitle/:title",async function(req,res){
   let blogs=await BlogModel.find({title:req.params.title});
   res.send(blogs);
})


module.exports=router;