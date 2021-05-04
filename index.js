// Express Template 
var express = require('express');
// require("dotenv").config();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
// const cors = require('cors')
var allRoutes = require('./controllers');

// Requiring our models for syncing
var db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//PRODUCTION CORS
// app.use(cors({
//     origin:["https://fish-tank-frontend.herokuapp.com"]
// }))

// DEV CORS
// app.use(cors())

app.use('/', allRoutes);

//turn to false to NOT rebuild models 
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});