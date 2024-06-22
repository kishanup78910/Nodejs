console.log("day 3")
const express = require('express');

const app =express();


app.get('/',function(req,res){
    res.send("hello world");
})

app.get('/chicken',function(req,res){
    res.send("preparing your chicken");
})


app.get('/idali',function(req,res){
    res.send("we woould love to server ida;ly");
})

app.listen(3000);