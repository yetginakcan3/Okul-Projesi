const express=require('express')
const router=express.Router()

const path = require('path')



// admin/add-student (GET)
router.get('/add-student', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','add-student.html'))
});

// admin/add-student (POST)
router.post('/add-student',(req,res,next) => {
    //database kayıt
    console.log(req.body)

    res.redirect('/')
})

module.exports = router