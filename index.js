// Express Template 
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan')
const helmet = require("helmet");
const cors = require('cors')
const app = express();
const Sequelize = require('sequelize');
const expressSession = require('express-session');
const SessionStore = require('express-session-sequelize')(expressSession.Store);

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
//Saw helmet in a tutorial, not sure if we are going to need it
// app.use(helmet());


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sequelize Sessions Middleware
const myDatabase = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'mysql',
});

const sequelizeSessionStore = new SessionStore({
	db: myDatabase,
});

app.use(cookieParser());
app.use(expressSession({
	secret: 'keep it secret, keep it safe.',
	store: sequelizeSessionStore,
	resave: false,
	saveUninitialized: false,
}));


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