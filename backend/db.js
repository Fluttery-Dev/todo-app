const mongoose = require("mongoose");

try {
   mongoose.connect("mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluseter0.f3qlbuo.mongodb.net/todos");
} catch (err) {
    console.log(err);
}


const todoSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        completed: Boolean,
    }
);

const todo = new mongoose.model('todos', todoSchema);

module.exports = {todo};