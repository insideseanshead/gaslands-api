module.exports = function(sequelize, DataTypes) {
    var RacingTeam = sequelize.define('RacingTeam', {
        name: DataTypes.STRING
    });

    RacingTeam.associate = function(models) {
       RacingTeam.hasMany(models.Racer)
       RacingTeam.hasOne(models.SponsorName)
       RacingTeam.hasMany(models.User)
    }
    return RacingTeam;
};