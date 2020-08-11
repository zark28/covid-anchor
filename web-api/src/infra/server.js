const express = require("express");

//Setup variables
const port = 4000;

const server = async()=>{
    //Create an expressapp
const app = express();

//Routes
app.post("/story", (req,res)=>{
    res.send("welcom to stories")
});


app.listen(port,()=>{
    console.table({
        "App Name": "Covid Anchor API",
        path: `http//:localhost:${port}`,
    });
});
};

module.exports = server;
