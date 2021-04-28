module.exports = function(sequelize, DataTypes) {
    var RacingTeam = sequelize.define('RacingTeam', {
        name: DataTypes.STRING
    });

    RacingTeam.associates = function(models) {
        RacingTeam.zeroOrMany(models.Racer);
        RacingTeam.hasOne(models.User);
        RacingTeam.hasMany(models.Sponsor);
       
    }
    return RacingTeam;
};