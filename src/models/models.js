const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
    item: String,
    description: String,
    iscompleted: Boolean
});

const Todo = mongoose.model("TODO",todoSchema);
module.exports = {Todo};
