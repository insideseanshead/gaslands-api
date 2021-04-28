module.exports = function(sequelize, DataTypes) {
    var Racer = sequelize.define('Racer', {
        racerName: DataTypes.STRING
    });

    Racer.associates = function(models) {
        Racer.hasOne(models.SponsorName);
        Racer.hasOne(models.RacingTeam);
        Racer.hasOne(models.Vehicles);
        Racer.hasMany(models.Weapon);
        Racer.hasMany(models.Upgrade);
    }

    return Racer;
};