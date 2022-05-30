let express = require("express");
let app = express();

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/pages/index.html");
});

app.get("/login", (req, res)=>{
    res.sendFile(__dirname + "/pages/login.html");
});

app.listen(8085, ()=>{
    console.log("Website running at http://localhost:8085/");
});