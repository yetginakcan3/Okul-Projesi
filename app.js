const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const path = require('path')

const sequelize = require('./utility/database')

const adminRoutes= require('./routes/admin')
const userRoutes= require('./routes/user')



app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))


//Routes
app.use('/admin',adminRoutes)
app.use(userRoutes)

const testConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log('Veritabanı bağlantısı başarılı.');
    } catch (error) {
      console.error('Veritabanı bağlantısı başarısız:', error);
    } finally {
      await sequelize.close();
    }
  };
  
  testConnection()


app.use((req,res) =>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
   
})



app.listen(3500, () => {
    console.log('listening on port 3500');
});



