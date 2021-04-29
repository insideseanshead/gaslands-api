module.exports = function(sequelize, DataTypes) {
    var RacingTeam = sequelize.define('RacingTeam', {
        name: DataTypes.STRING
    });

    RacingTeam.associates = function(models) {
        RacingTeam.hasMany(models.Racer);
        RacingTeam.belongsTo(models.User);
        RacingTeam.hasMany(models.Sponsor);
       
    }
    return RacingTeam;
};