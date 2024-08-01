const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const authMiddle = require('./middlewares/authMiddle');
const sequelize = require('./utility/database');

const Principal = require('./models/principal');
const Teacher = require('./models/teacher');
const Student = require('./models/student');
const Class = require('./models/class');
const Course = require('./models/course');
const Grade = require('./models/grade');

// Associations
Principal.hasMany(Teacher, { foreignKey: 'principalId' });
Teacher.belongsTo(Principal, { foreignKey: 'principalId' });

Principal.hasMany(Student, { foreignKey: 'principalId' });
Student.belongsTo(Principal, { foreignKey: 'principalId' });

Principal.hasMany(Class, { foreignKey: 'principalId' });
Class.belongsTo(Principal, { foreignKey: 'principalId' });

Principal.hasMany(Course, { foreignKey: 'principalId' });
Course.belongsTo(Principal, { foreignKey: 'principalId' });

Teacher.hasMany(Grade, { foreignKey: 'teacherId' });
Grade.belongsTo(Teacher, { foreignKey: 'teacherId' });

Student.hasMany(Grade, { foreignKey: 'studentId' });
Grade.belongsTo(Student, { foreignKey: 'studentId' });


// Middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));


require('dotenv').config();

console.log(process.env.EMAIL_USER); 



// View Engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Routes
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const prcRoute = require('./routes/principal');
const teacRoute = require('./routes/teacher');
const stuRoute = require('./routes/student');
const authRoute = require('./routes/auth');


// Apply routes
app.use(prcRoute);
app.use(teacRoute);
app.use(stuRoute);
app.use(adminRoutes);

// Authorization
app.use('/auth',  authRoute);
app.use(userRoutes);



app.use(authMiddle.authorizePrincipal);



// 404 Handling
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Start server
app.listen(3500, () => {
    console.log('Listening on port 3500');
});



