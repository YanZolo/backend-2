const express = require('express');
const app = express();
const port = 8080;
const student = [];

app.use(express.static('public'));

app.get('/students', (req,res)=>{
    res.redirect('/students/add', {student: req.body.student})
});
app.post('/students', (req,res)=>{

});


app.listen(port, ()=>{
    console.log(`server started at port: ${port}`)
});