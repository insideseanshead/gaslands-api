module.exports = function(sequelize, DataTypes) {
    var Upgrade = sequelize.define('Upgrade', {
        upgrade: DataTypes.VARCHAR,
        buildSlot: DataTypes.INT,
        cost: DataTypes.INT,
        mishkin: DataTypes.TINYINT(1)
    });

    Upgrade.associates = function(models) {
        Upgrade.hasOne(models.Racer);
        Upgrade.hasMany(models.SpecialRule);
    }
    return Upgrade;
}