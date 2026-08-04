import express from "express"

const app=express()

app.get("/",(req,res)=>{
    res.send("I am running")})



app.listen(5050,() => {
    console.log("Server is Running in Port 5050")
})