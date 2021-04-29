module.exports = function(sequelize, DataTypes) {
    var Racer = sequelize.define('Racer', {
        racerName: DataTypes.STRING
    });

    Racer.associates = function(models) {
        Racer.hasOne(models.SponsorName);
        Racer.hasOne(models.Vehicle);
        Racer.hasMany(models.Weapon);
        Racer.hasMany(models.Upgrade);

        Racer.belongsTo(models.RacingTeam)
    }

    return Racer;
};