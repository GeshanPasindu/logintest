const express = require('express');
require("dotenv").config();
const app = express()
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: process.env.SQL_DB

});

app.post('/create',(req,res) => {
    console.log(req.body)
    const name = req.body.name;
    const age = req.body.age;
    const position = req.body.position;
    const country = req.body.country;
    const anualsal = req.body.anualsal;

    db.query(`INSERT INTO employee (name,age,position,country,anual_salary) VALUES (?,?,?,?,?)`,
    [name,age,position,country,anualsal], 
    (err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send("value inserted")
        }
    }
    );
});

app.get('/emp',(req,res) =>{
    db.query('SELECT*FROM employee',
    (err,result) =>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
        console.log(result)
    }
    )
})

app.listen(process.env.APP_PORT,() =>{
    console.log('server up and running on:',process.env.APP_PORT)
});