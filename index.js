const express = require("express");
const path = require("path")
const app = express();

const PORT = 8081;

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "src/calculadora.html"))
})

app.get("/css", (req, res) => {
    res.sendFile(path.join(__dirname, "src/calculadora.css"))
})

app.get("/js", (req, res) => {
    res.sendFile(path.join(__dirname, "src/calculadora.js"))
})

app.listen(PORT)