const express = require('express');
const app = express();
const port = 3333;
const countries = require('./dataCountries.json')


app.get('/', (req, res)=>{
    res.send(countries);
})




app.listen(port, ()=>{
    console.log('server started at port 3333')
})