const express = require('express');
const app = express();
const bodyParser= require('body-parser');

app.use(bodyParser.urlencoded({extended:false}))


app.get('/add-student', (req, res, next) => {
    res.send(`
        <html>
        <head>
            <title>Add a New Student</title>
        </head>
        <body>
            <form action="/student" method="POST">
                <label for="studentName">Student Name:</label>
                <input type="text" id="studentName" name="studentName" required>
                <input type="submit" value="Save Student">
            </form>
        </body>
        </html>
    `);
});

app.post('/student',(req,res,next) => {
    //database kayıt
    console.log(req.body)

    res.redirect('/')
})


app.use('/',(req,res,next) => {
    res.send('<h1>Ana sayfaya hoş geldiniz.<h1>')
})

app.listen(3500, () => {
    console.log('listening on port 3500');
});



