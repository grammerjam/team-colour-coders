const mysql = require("mysql");
const express = require("express");

const app = express();
app.get('/',(err,res)=>{
    res.send("Hello");
});
app.listen(3000, () => console.log("Server is listening on port 3000...") );