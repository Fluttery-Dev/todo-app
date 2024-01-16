const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.json({
        msg: "welcome to todo app",
    });
});

app.get("/todos", (req,res)=>{

});

app.post("/todo", (req,res)=>{

});

app.delete("/todo/:id", (req,res)=>{

});

app.listen(3000);