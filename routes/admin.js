const express=require('express')
const router=express.Router()


// admin/add-student (GET)
router.get('/add-student', (req, res, next) => {
    res.send(`
        <html>
        <head>
            <title>Add a New Student</title>
        </head>
        <body>
            <form action="/admin/add-student" method="POST">
                <label for="studentName">Student Name:</label>
                <input type="text" id="studentName" name="studentName" required>
                <input type="submit" value="Save Student">
            </form>
        </body>
        </html>
    `);
});

// admin/add-student (POST)
router.post('/add-student',(req,res,next) => {
    //database kayıt
    console.log(req.body)

    res.redirect('/')
})

module.exports = router