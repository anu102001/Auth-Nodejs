const express =require('express');
const mongoose = require('mongoose');

const expressLayouts=require('express-ejs-layouts');
const app = express();
//ejs
app.use(expressLayouts);
app.set('view engine' , 'ejs'); 
 // bodyparser
 app.use(express.urlencoded({extended: true})); 

//DB config


const mongoDB = "mongodb://localhost:27017/authentication";
mongoose.connect(mongoDB, {
    useNewUrlParser: true,

    useCreateIndex: true,

    useUnifiedTopology: true,

    useFindAndModify: false
}).then(() => {
    console.log("Connected to Database");
}).catch(err => {
    console.log(err.message);
});
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/user'))
const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`listening at port ${PORT}` ))