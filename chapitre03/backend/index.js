const express = require('express');
const cors = require('cors')
const app = express();
const port = 8080;
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

const students = ["sofiane","abdelkader","habiba","rachid","khalid","redouane","moustapha","simo"];
app.use(express.static('public/build'));


app.get('/students', (req,res)=>{
    res.json(students);
});

app.post('/students', (req,res)=>{
    students.push(req.body.student);
    res.json(students);

});


app.listen(port, ()=>{
    console.log(`server started at port: ${port}`);
    console.log('student :>> ', students);
});