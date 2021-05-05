const { HasMany } = require("sequelize/types");

module.exports = function(sequelize, DataTypes) {
    var RacingTeam = sequelize.define('RacingTeam', {
        name: DataTypes.STRING,
        // Store TeamName
        team: DataTypes.STRING
    });

    RacingTeam.associate = function(models) {
       RacingTeam.hasMany(models.Racer)
       RacingTeam.belongsTo(models.TeamName)
    }
    return RacingTeam;
};