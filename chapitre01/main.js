
const authors = require('./data.js')
const express = require('express');
const app = express()
const port = 3003;

const showAuthors = (id) => {

    return `${authors[id - 1].name},
       ${authors[id - 1].nationality}`

}

const showAuthorsBooks = (id) => {
    return `${authors[id - 1].books}`
}

const showAuthorsJson = (id) => {

    return {
        name: authors[id - 1].name, nationality: authors[id - 1].nationality
    }
}


const showAuthorsBooksJson = (id) =>
(
    {
        books: authors[id - 1].books
    }
)



app.get('/:id', (req, res) => {
    res.send(showAuthors(parseInt(req.params.id)))
})
app.get('/authors/:id/books', (req, res) => {
    res.send(showAuthorsBooks(parseInt(req.params.id)))
})

//Json formats
app.get('/json/authors/:id', (req, res) => {
    res.send(showAuthorsJson(parseInt(req.params.id)))
})
app.get('/json/authors/:id/books', (req, res) => {
    res.send(showAuthorsBooksJson(parseInt(req.params.id)))
})






app.listen(port, () => {
    console.log('server started at port 3003')
})