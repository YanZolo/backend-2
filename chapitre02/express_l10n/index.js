const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 8600;
const translations = require('./translations.json')

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'))


app.get('/:lang?', (req, res)=>{    
    console.log('reqParamsLang: ',req.params.lang);
    console.log('translations: ',translations);
    const lang = req.params.lang;
if(lang === undefined){
    res.render('home', {pageTitle: translations['fr']['pageTitle'], title: translations['fr']['title'],imgUrl: translations['fr']['imgUrl'] })
}else {
    
    res.render('home',{pageTitle: translations[lang]["pageTitle"],
    title: translations[lang]['title'], imgUrl: translations[lang]['imgUrl']});
}
});



app.listen(port, ()=>{
    console.log(`server started at port: ${port}`)
});