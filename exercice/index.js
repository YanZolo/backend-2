const express = require('express');
const app = express();
const port = 3333;
const array = ['ishrane','sofiane S', 'tissane', 'hassnaine', 'amir', 'semou', 'alexandre', 'sofiane A', 'jeremy', 'fatoumata', 'munneb', 'françois', 'ibrahim', 'steve']

const randomNumber = Math.floor(Math.random() * array.length)

app.get('/home', (req, res)=>{
    res.send(array[randomNumber])
})



app.listen(port, ()=>{
console.log(`server started at port ${port}`)
});