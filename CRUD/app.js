const express = require("express");
const usermodel = require("./usermodel");
const app = express();

app.get("/",(req,res)=>{
  res.send("hyyy")
})

app.get("/create",async (req,res)=>{
  let createduser =await usermodel.create({
    name:"Dhruv",
    username:"Subzero",
    email:"dhruv@gmail.com"
  })
  res.send(createduser)
})

app.get("/update",async (req,res)=>{
  let updateduser = await usermodel.findOneAndUpdate({username:"Ruthless"},{name:"Ronak Chitalia"},{new:true});
  res.send(updateduser)
})

app.get("/read",async (req,res)=>{
  let users = await usermodel.find()
  res.send(users)
})

app.get("/delete",async (req,res)=>{
  let users = await usermodel.findOneAndDelete({name:"Ronak Chitalia"})
  res.send(users)
})

app.listen(3000,(err)=>console.log(err));