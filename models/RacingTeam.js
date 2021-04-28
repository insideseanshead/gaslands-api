module.exports = function(sequelize, DataTypes) {
    var RacingTeam = sequelize.define('RacingTeam', {
        name: DataTypes.VARCHAR
    });

    RacingTeam.associates = function(models) {
        RacingTeam.zeroOrMany(models.Racer);
        RacingTeam.hasOne(models.User);
        RacingTeam.hasMany(models.Sponsor);
       
    }
};