const express =require("express");
const app =express();
const cors = require("cors");

// Use the cors middleware
app.use(cors());
app.get("/greet",function(req,res){
    res.send("Hello Karthick");
});
app.get("/api/greeting",(req,res)=>{
    res.json({message:"hello"});
})
app.listen(3000,()=>{
    console.log("server is running in 3000");
});