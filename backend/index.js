const express = require("express");
const { createTodoSchema, updateTodoSchema } = require("./types");
const { todo } = require("./db");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    res.json({
        msg: "welcome to todo app",
    });
});

app.get("/todos", async (req,res)=>{
    const todos = await todo.find({});
    res.json({
        todos: todos,
    });
});

app.post("/todo", async (req,res)=>{
    const payload = req.body;
    const parsedPayload = createTodoSchema.safeParse(payload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"Bad Input"
        });
    }

    await todo.create(
        {
            title: payload.title,
            description: payload.description,
            completed: false,
        }
    );

    res.json({
        msg:"Todo Created",
    })
});

app.put("/completed", (req,res)=>{
    const payload = req.body;
    const parsedPayload = updateTodoSchema.safeParse(payload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"Bad Input"
        });
    }

    todo.findOneAndUpdate({_id:payload.id}, {completed: true});

    res.json({
        msg: "Todo updated",
    })

});

app.delete("/todo", async (req,res)=>{
    const payload = req.body;
    const parsedPayload = updateTodoSchema.safeParse(payload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"Bad Input"
        });
    }
    
    await todo.deleteOne({
        _id:payload.id,
    });

    res.json({
        msg: "todo deleted",
    });
});

app.listen(3000);