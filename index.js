const { application } = require("express");
const express = require("express");
const server = express(); // app is object of express class and it can have multiple servers
const cors = require("cors");
const bodyparser = require("body-parser"); //used to process data sent in an HTTP request body.
const mongoose = require("mongoose");
const{ displayWork,addWork, updateWork, deleteWork,updateStatus} = require("../St2/src/controllers/control"); //importing api
//const { json } = require("body-parser");
// connecting with database
mongoose.connect("mongodb://localhost:27017/St2");
mongoose.connection.on("connected",()=>{
    console.log("DataBase CONNECTED");
});

server.use(cors());
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({
    extended: true
  }));

server.get("/displayWork", displayWork);
server.post("/addWork", addWork);
server.put("/updateWork", updateWork);
server.delete("/deleteWork",deleteWork);
server.put("/updateStatus",updateStatus);


server.listen(5000,() =>{
    console.log("Server started at port 5000");
});
