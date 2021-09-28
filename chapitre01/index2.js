const express = require('express');
const app = express();
const port = 3333;
const authors = require('../dataAuthors.json')

app.get('/', (req, res)=> {
    res.send('Authors API')
})
app.get('/authors/:index/', (req, res)=> {
    const index = req.params.index - 1
    res.send(`${authors[index]['name']}, ${authors[index].nationality}`)

})

app.get('/authors/:index/books' , (req ,res) => {
    const index = req.params.index - 1
    res.send(`${authors[index]['books']}`)
})


app.get('/json/authors/:index' , (req ,res) => {
    const index = req.params.index - 1;
    const { name, nationality } =  authors[index]
    res.json({name, nationality})
})

app.get('/json/authors/:index/books' , (req ,res) => {
    const index = req.params.index - 1;
    const { books } =  authors[index]
    res.json( {books} )
})

app.listen(port, ()=> {
    console.log(`server started at port ${port}`)
})