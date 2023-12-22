const express=require("express");
const app=express();
const port =3000;

app.use(express.static('public'));
/*
app.get('/', function(req, res){
    res.send("Goodbye world!!!");
})*/
app.listen(port,()=>{
    console.log("It woeks my Machine -(*_*)")
});





/*const express = require("express");
consst app=express();

app.listen(3000);
app.use(express.static('public'));
app.listen(port);*/