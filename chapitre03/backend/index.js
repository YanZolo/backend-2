const express = require('express');
const cors = require('cors')
const app = express();
const port = 8080;
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));


const student = ["sofiane","abdelkader","habiba","rachid","khalid","redouane","moustapha","simo"];


// app.use(express.static('public'));

app.get('/students', (req,res)=>{
    res.json(student);
});

app.post('/students', (req,res)=>{
    console.log(req.body.student);    
    student.push(req.body.student);
    console.log('student :>> ', student);
    res.send('student name added');

});


app.listen(port, ()=>{
    console.log(`server started at port: ${port}`);
    console.log('student :>> ', student);
});