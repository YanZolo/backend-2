const express = require('express');
const app = express();
const port = 3333;
const exphbs = require('express-handlebars');

app.use(express.static('public'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
const home = {
    title: 'France',
    img: "https://restcountries.com/data/fra.svg",
    neighbourCountries: ['Spain', 'Italy', 'Germany', 'England']
}
app.get('/', (req, res) => {
    res.render('home', {
        title: 'France',
        img: "https://restcountries.com/data/fra.svg",
        neighbourCountries: ['Spain', 'Italy', 'Germany', 'England']
    });
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.use(express.urlencoded({ extended: true }))

app.post('/', (req, res) => {
    // res.redirect('/')
    res.render('home', { ...home, name: req.body.inputName })
    console.log({username:req.body.inputName,password: req.body.inputPassword})
});


app.listen(port, () => {
    console.log(`server started at port: ${port}`);
});