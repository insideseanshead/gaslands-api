const sequelize_fixtures = require('sequelize-fixtures');
const models = require('../models');

// script to seed data base
console.log("Seeding Database")
const seed = sequelize_fixtures.loadFile('./fixtures/seeds.json', models)
    .then(function(){
        console.log("Database seeded")
    });
