import express from "express";
const app = express();
const port =9000;

app.use("/",(req,res)=>{
    res.json({message:"hellow from express"})
})

app.listen(9000,()=>{
    console.log("server started on port 9000")
})