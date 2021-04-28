module.exports = function(sequelize, DataTypes) {
    var Racer = sequelize.define('Racer', {
        racerName: DataTypes.VARCHAR
    });

    Racer.associates = function(models) {
        //Racer.hasOne(models.Sponsor)
        //Racer.hasZeroOrOne(models.RacingTeam)
        //Racer.hasOne(models.vehicles)
        //Racer.hasOneOrMany(models.weapons)
        //Racer.hasMany(models.upgrades)
    }
}