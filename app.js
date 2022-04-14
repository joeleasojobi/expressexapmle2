var express=require('express')

var app=express()

app.get('/',(req,res)=>{
    res.send("This is an exapmle to show Express Program")
})

app.get('/home',(req,res)=>{
    res.send("Welcome to Home Page")
})

app.get('/firstpage',(req,res)=>{
    res.send("This is the first page")
})

app.listen(3000,()=>{
    console.log("Server Started");
})