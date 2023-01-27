const express = require('express');
require("dotenv").config();
const app = express()
const mysql = require('mysql');

const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: process.env.SQL_DB

});

app.post('/create',(req,res) => {
    const name = req.body.name;
    const age = req.body.age;
    const position = req.body.position;
    const country = req.body.country;
    const anualsal = req.body.anualsal;

    
});


app.listen(process.env.APP_PORT,() =>{
    console.log('server up and running on:',process.env.APP_PORT)
});