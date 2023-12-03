const express=require("express");

const mongoose=require("mongoose");
const cors=require("cors");

const blogRoutes=require("./routes/blog")

const app=express();

mongoose.connect("mongodb://127.0.0.1:27017/blog-app");

app.use(cors());
app.use(express.json());

app.use("/blog",blogRoutes);

app.listen(8000,()=>{
    console.log("server is running");
})