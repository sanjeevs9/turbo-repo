import  express  from "express";

const app=express();
const port=3000;
app.use("/",(req,res)=>{
    return res.json({
        message:"hellloo"
    })
})

app.listen(port)
console.log("Server is running on Port" +port )