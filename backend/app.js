const express = require('express'); //to build backend quickly
const app = express(); //lisence of express
const cors = require('cors'); //to cross original policies

const PORT = 8745;
require("./dB")

app.use(cors()); //app.use(cors()) means use this cors package when server starts up


app.use(express.json()); //app.use(express.json
app.use(express.urlencoded({ extended: true })); //app.use(express.urlencoded)
app.use(express.static('public')); //app.use(express.static)









app.listen(PORT,()=>{
    console.log(`server is runnig on port ${PORT}`);
})