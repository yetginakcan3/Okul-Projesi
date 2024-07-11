const express = require('express');
const app = express();

app.use((req,res,next) => {
    console.log("middleware 1 calıstırıldı...")
    next()
})

app.use((req,res,next) => {
    console.log("middleware 2 calıstırıldı...")
    res.send("<h1>hello from express.js<h1>")
})

app.listen(3500, () => {
    console.log('listening on port 3500');
});



