// Express Template 
const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const app = express();
const Sequelize = require('sequelize');
// const bodyParser = require('body-parser');
// const session = require('express-session');


require("dotenv").config();

const PORT = process.env.PORT || 8080;
const allRoutes = require('./controllers');

// Requiring our models for syncing
const db = require('./models');

// Passport config
// require('./config/passport')(passport)

//Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// initialize an instance of Sequelize
const sequelize = new Sequelize({
    database: "gaslands",
    username: "root",
    password: process.env.PASSWORD,
    dialect: "mysql",
  });


//PRODUCTION CORS
// app.use(cors({
//     origin:["https://fish-tank-frontend.herokuapp.com"]
// }))


// DEV CORS
app.use(cors())

app.use('/', allRoutes);

//turn to false to NOT rebuild models 
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});