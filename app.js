const express = require('express');
const app = express();

app.use('/',(req,res,next) => {
   console.log('loglama yapıldı...')
   next()
})

app.use('/add-student',(req,res,next) => {
    res.send('<h1>Öğrenci Eklendi<h1>')
})

app.use('/student-list',(req,res,next) => {
    res.send("<h1>öğrenciler listesi<h1>")
})

app.use('/',(req,res,next) => {
    res.send('<h1>Ana sayfaya hoş geldiniz.<h1>')
})

app.listen(3500, () => {
    console.log('listening on port 3500');
});



