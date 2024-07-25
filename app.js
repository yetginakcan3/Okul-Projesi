const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const path = require('path')



const sequelize = require('./utility/database')

const Principal = require('./models/principal');
const Teacher = require('./models/teacher');
const Student = require('./models/student');
const Class = require('./models/class');
const Course = require('./models/course');
const Grade = require('./models/grade');

Principal.hasMany(Teacher);
Teacher.belongsTo(Principal);

Principal.hasMany(Student);
Student.belongsTo(Principal);

Principal.hasMany(Class);
Class.belongsTo(Principal);

Principal.hasMany(Course);
Course.belongsTo(Principal);

Teacher.hasMany(Grade)
Grade.belongsTo(Teacher)

Student.hasMany(Grade)
Grade.belongsTo(Student)






const adminRoutes= require('./routes/admin')
const userRoutes= require('./routes/user')

const prcRoute = require('./routes/principal')
const teacRoute = require('./routes/teacher')
const stuRoute = require('./routes/student')

const authRoute = require('./routes/auth')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json())

app.use(prcRoute)

app.use(teacRoute)
app.use(stuRoute)
app.use(authRoute)





app.use(express.static(path.join(__dirname,'public')))


//Routes
app.use('/admin',adminRoutes)
app.use(userRoutes)




app.use((req,res) =>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
   
})



/*sequelize.sync({ force: true }) // Tabloları zorla yeniden oluştur
    .then(result => {
        console.log('Database synchronized');
    })
    .catch(err => {
        console.error('Error synchronizing database:', err);
    });*/



app.listen(3500, () => {
    console.log('listening on port 3500');
});



