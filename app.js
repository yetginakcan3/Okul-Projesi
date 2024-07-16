const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const path = require('path')


const sequelize = require('./utility/database')
const Principal = require('./models/principal');
const Teacher = require('./models/teacher');

const adminRoutes= require('./routes/admin')
const userRoutes= require('./routes/user')



app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))


//Routes
app.use('/admin',adminRoutes)
app.use(userRoutes)




app.use((req,res) =>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
   
})



sequelize.sync({ force: true }) // Tabloları zorla yeniden oluştur
    .then(result => {
        console.log('Database synchronized');
    })
    .catch(err => {
        console.error('Error synchronizing database:', err);
    });



app.listen(3500, () => {
    console.log('listening on port 3500');
});



